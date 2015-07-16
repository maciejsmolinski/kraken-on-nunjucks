'use strict';


module.exports = function (grunt) {

  // Load the project's grunt tasks from a directory
  require('grunt-config-dir')(grunt, {
    configDir: require('path').resolve('tasks')
  });

  // Register group tasks
  grunt.registerTask('default', [ 'test', 'build', 'watch' ]);
  grunt.registerTask('test',    [ 'jshint', 'jscs', 'mochaTest' ]);
  grunt.registerTask('build',   [ 'sass', 'nunjucks', 'sails-linker', 'copyto' ]);

};
