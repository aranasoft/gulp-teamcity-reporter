# [1.2.0](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v1.1.1...v1.2.0) (2019-12-13)



## [1.1.1](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v1.1.0...v1.1.1) (2019-04-02)



# [1.1.0](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v1.0.0...v1.1.0) (2019-04-02)


### Bug Fixes

* **gulp4:** fix event and property names for gulp 4 ([5b1e888](https://github.com/aranasoft/gulp-teamcity-reporter/commit/5b1e88805db6a9f3164aafce536206aef9a55d39)), closes [#6](https://github.com/aranasoft/gulp-teamcity-reporter/issues/6)


### Features

* **context:** add options to ignore TeamCity context ([9345b6b](https://github.com/aranasoft/gulp-teamcity-reporter/commit/9345b6b482211bc4d2d05f80a3b90d93dd43d68b)), closes [#2](https://github.com/aranasoft/gulp-teamcity-reporter/issues/2)


### BREAKING CHANGES

* **context:** error event logging now requires executing the error function.
    `.on('error', plugin.error)` is now
    `.on('error', plugin.error(opts))`, where `opts` is an optional
    argument that may set `ignoreContext: true`.



# [1.0.0](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v0.0.2...v1.0.0) (2019-04-01)



## [0.0.2](https://github.com/aranasoft/gulp-teamcity-reporter/compare/v0.0.1...v0.0.2) (2015-05-11)


### Features

* **task_err:** Add TeamCity Logging for when a task fails ([43cb450](https://github.com/aranasoft/gulp-teamcity-reporter/commit/43cb450d0b35d5dc1f2b8af9eaa49815c95b5bbe))



## [0.0.1](https://github.com/aranasoft/gulp-teamcity-reporter/compare/19240774f0385d6bb15970f2f20c12c289a60a97...v0.0.1) (2015-05-11)


### Features

* **teamcity:** Report Task start, end, not found, and error to TeamCity ([1924077](https://github.com/aranasoft/gulp-teamcity-reporter/commit/19240774f0385d6bb15970f2f20c12c289a60a97))



