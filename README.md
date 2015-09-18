# gulp-teamcity-reporter

## Install

```sh
$ npm install --save-dev gulp-teamcity-reporter
```

## Usage

```javascript
var teamcity = require('gulp-teamcity-reporter');

teamcity.wireTaskEvents(options);

options = {
  sendTaskDuration: true //send buildStatisticValue of task run time, by default false
}
```

### Error handling

`gulp-teamcity-reporter` contains an `error` method for handling
`PluginError` objects for when a plugin throws an error.

```javascript
var coffee = require('gulp-coffee');
var teamcity = require('gulp-teamcity-reporter');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee().on('error', teamcity.error))
    .pipe(gulp.dest('./public/'))
});
```

## License

[BSD-3-Clause](https://raw.githubusercontent.com/aranasoft/gulp-teamcity-reporter/master/LICENSE) © [Arana Software](http://www.aranasoft.com)
