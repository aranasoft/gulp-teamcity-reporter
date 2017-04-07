var gulp = require('gulp');
var tsm = require('teamcity-service-messages');

function isTeamCityContext() {
  if (process === null || typeof process === 'undefined') {
    return false;
  }
  var env = process.env;
  if (env === null || typeof env === 'undefined') {
    return false;
  }
  return (env.TEAMCITY_VERSION !== null && typeof env.TEAMCITY_VERSION !== 'undefined');
}

function logError(err) {
  opts = opts || {};

  var shouldReportMessage = opts.force? () => true : isTeamCityContext;

  if (!(shouldReportMessage())) { return; }
  tsm.buildProblem({description: 'Error in plugin \'' + err.plugin + '\' with error: ' + err.message});
}

function wireTaskEvents(opts) {
  opts = opts || {};

  var shouldReportMessage = opts.force? () => true : isTeamCityContext;

  gulp.on('task_start', function (e) {
    if (!(shouldReportMessage())) { return; }
    tsm.progressStart(e.task);
  });

  gulp.on('task_stop', function (e) {
    if (!(shouldReportMessage())) { return; }
    tsm.progressFinish(e.task);
    opts.sendTaskDuration && tsm.buildStatisticValue({key: 'gulp:' + e.task, value: e.duration * 1000});
  });

  gulp.on('task_err', function (e) {
    if (!(shouldReportMessage())) { return; }
    tsm.buildProblem({description: 'Task \'' + e.task + '\' failed. ' + e.err});
  });

  gulp.on('task_not_found', function (e) {
    if (!(shouldReportMessage())) { return; }
    tsm.buildProblem({description: 'Task \'' + e.task + '\' is not in your gulpfile'});
  });
}

module.exports = {
  wireTaskEvents: wireTaskEvents,
  error: logError
};
