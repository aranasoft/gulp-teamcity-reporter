const gulp = require('gulp');
const tsm = require('teamcity-service-messages');

function isTeamCityContext() {
  if (process === null || typeof process === 'undefined') {
    return false;
  }

  const {env} = process;
  if (env === null || typeof env === 'undefined') {
    return false;
  }

  return (env.TEAMCITY_VERSION !== null && typeof env.TEAMCITY_VERSION !== 'undefined');
}

function logError(opts) {
  const {ignoreContext} = opts || {};

  return function (err) {
    if (ignoreContext !== true && !(isTeamCityContext())) {
      return;
    }

    tsm.buildProblem({description: `Error in plugin '${err.plugin}' with error: ${err.message}`});
  };
}

function wireTaskEvents(opts) {
  const {sendTaskDuration, ignoreContext} = opts || {};

  gulp.on('start', e => {
    if (ignoreContext !== true && !(isTeamCityContext())) {
      return;
    }

    tsm.progressStart(e.name);
  });

  gulp.on('stop', e => {
    if (ignoreContext !== true && !(isTeamCityContext())) {
      return;
    }

    tsm.progressFinish(e.name);
    if (sendTaskDuration) {
      const {duration} = e;
      tsm.buildStatisticValue({key: `gulp: ${e.name}`, value: (((duration[0] * 1e9) + duration[1])) * 0.000001});
    }
  });

  gulp.on('error', e => {
    if (ignoreContext !== true && !(isTeamCityContext())) {
      return;
    }

    tsm.buildProblem({description: `Task '${e.name}' failed. ${e.error}`});
  });
}

module.exports = {
  wireTaskEvents,
  error: logError
};
