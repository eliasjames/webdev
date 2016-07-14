I. Automated builds with Grunt
  a. Why?
    - Speed up common tasks
    - Store infrequently performed tasks
  b. Common tasks
    - Lint
    - Transpile
    - Test
    - Watch
    - Minify and concatenate
    - Bundle assets
  c. Build tools FTW
    - New to JS, old school in other languages (make, rake)
    - Perform tasks
    - Report success/fail codes
    - Integrate with QA and deployment tools
In Practice (code-along)
  d. Get started
    - Install node/npm
    - Install grunt-cli (once per dev machine)
    - Install grunt
    - Write a Gruntfile
    - `grunt`
  e. Gruntfile
    - module.exports
    - initConfig
    - loadNpmTasks
    - registerTask
    - add a default task && grunt.log.write
II. Exercise/Lab
  f. Set up Karma, Watch, Jshint:
    - npm install --save-dev [package name]
    - Add an options entry to initConfig object
    - Add a loadNpmTasks call for the package
    - Add a registerTasks call for the package
    - Add that call to the default task
    - Repeat
  g. Add postinstall test hook to package.json
