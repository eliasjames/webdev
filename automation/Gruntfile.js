module.exports = function ( grunt ) {
  grunt.registerTask('helloWorld', 'A simple example', function() {
    grunt.log.write('Hello world\n').ok();
  });
  grunt.registerTask('default', ['helloWorld']);
}
