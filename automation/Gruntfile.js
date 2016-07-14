module.exports = function ( grunt ) {
  grunt.initConfig({
    karma: {
      continuous: {
        background: true,
        singleRun: false
      },
      options: {
        files: ['./test/*.spec.js']
      },
      unit: {
        singleRun: true
      }
    } 
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', 'A procedure for critical evaluation', ['karma:continuous:start']);
  grunt.registerTask('helloWorld', 'A simple example', function() {
    grunt.log.write('Hello world\n').ok();
  });

  grunt.registerTask('default', ['helloWorld']);
}
