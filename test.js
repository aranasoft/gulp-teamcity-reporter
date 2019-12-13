const {src, dest} = require('gulp');
const teamcity = require('.');

teamcity.wireTaskEvents({ignoreContext: true, sendTaskDuration: true});

const copyNothing = () => {
  return src('./doesnt-exist/nothing.foo', {allowEmpty: true})
    .pipe(dest('./doesnt_exist/'));
};

const logError = () => {
  return src('./doesnt-exist/nothing.foo', {allowEmpty: false})
    .on('error', teamcity.error({ignoreContext: true}))
    .pipe(dest('./doesnt_exist/'));
};

const breakingTask = () => {
  throw new Error('error!');
};

exports.default = copyNothing;
exports.copyNothing = copyNothing;
exports.logError = logError;
exports.breaking = breakingTask;
