# gulp-teamcity-reporter

[![Build Status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url]

## Install

```sh
$ npm install --save-dev gulp-teamcity-reporter
```

## Usage

```javascript
require('gulp-teamcity-reporter').wireTaskEvents(options);
```

## Options

```javascript
const options = {
  sendTaskDuration: true, //send buildStatisticValue of task run time, by default false
  ignoreContext: true     //force TeamCity output, even if env vars are not detected
}
```

### sendTaskDuration

Type: `boolean`<br>
Default: `false`

Set it to `true` to send `buildStatisticValue` output of the task run time in milliseconds.

### ignoreContext

Type: `boolean`<br>
Default: `false`

Set it to `true` to force TeamCity-formated output, even if a TeamCity execution context was not detected.

## API

### `wireTaskEvents([options])`

Wire TeamCity-formatted logging into Gulp's events for task start, stop, and error.

```javascript
teamCityReporter.wireTaskEvents(options);
```

### `error([options])`
Wire TeamCity-formatted logging into any stream's error event.

```javascript
src('./src/somefiles.js')
   .pipe(somePlugin().on('error', teamCityReporter.error(options)));
   .pipe(dest('./output'));
```

## License

[BSD-3-Clause](https://raw.githubusercontent.com/aranasoft/gulp-teamcity-reporter/master/LICENSE) © [Arana Software](http://www.aranasoft.com)

[npm-url]: https://npmjs.org/package/gulp-teamcity-reporter
[npm-image]: http://img.shields.io/npm/v/gulp-teamcity-reporter.svg

[travis-url]: http://travis-ci.org/aranasoft/gulp-teamcity-reporter
[travis-image]: https://travis-ci.org/aranasoft/gulp-teamcity-reporter.svg?branch=master

[depstat-url]: https://david-dm.org/aranasoft/gulp-teamcity-reporter
[depstat-image]: https://david-dm.org/aranasoft/gulp-teamcity-reporter.svg

[devdepstat-url]: https://david-dm.org/aranasoft/gulp-teamcity-reporter#info=devDependencies
[devdepstat-image]: https://david-dm.org/aranasoft/gulp-teamcity-reporter/dev-status.svg
