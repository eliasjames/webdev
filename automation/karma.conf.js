module.exports = function(config) {
  config.set({
    files: [
      'node_modules/requirejs/require.js',
      './test-files/**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    plugins:[
      'karma-jasmine',
      'requirejs'
    ]
  });
}
