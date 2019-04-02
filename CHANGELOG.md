## [1.1.1](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v1.1.0...v1.1.1) (2019-04-02)



# [1.1.0](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v1.0.0...v1.1.0) (2019-04-02)


### Bug Fixes

* **gulp4:** fix event and property names for gulp 4 ([5b1e888](https://github.com/aranasoft/gulp-teamcity-reporter/commit/5b1e888)), closes [#6](https://github.com/aranasoft/gulp-teamcity-reporter/issues/6)


### Features

* **context:** add options to ignore TeamCity context ([9345b6b](https://github.com/aranasoft/gulp-teamcity-reporter/commit/9345b6b)), closes [#2](https://github.com/aranasoft/gulp-teamcity-reporter/issues/2)


### BREAKING CHANGES

* **context:** error event logging now requires executing the error function.
    `.on('error', plugin.error)` is now
    `.on('error', plugin.error(opts))`, where `opts` is an optional
    argument that may set `ignoreContext: true`.



# [1.0.0](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v0.0.2...v1.0.0) (2019-04-01)



## [0.0.2](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v0.0.1...v0.0.2) (2015-05-11)


### Features

* **task_err:** Add TeamCity Logging for when a task fails ([43cb450](https://github.com/aranasoft/gulp-teamcity-reporter/commit/43cb450))



## [0.0.1](https://github.com/aranasoft/gulp-teamcity-reporter/compare/1924077...v0.0.1) (2015-05-11)


### Features

* **teamcity:** Report Task start, end, not found, and error to TeamCity ([1924077](https://github.com/aranasoft/gulp-teamcity-reporter/commit/1924077))



