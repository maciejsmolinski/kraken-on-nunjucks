'use strict';


module.exports = function copyto(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-copy-to');

  // Options
  return {
    build: {
      files: [{
        cwd: 'public',
        src: ['**/!(bourbon|neat)*.!(coffee|scss)'],
        dest: '.build/'
      }],
      options: {
        ignore: [
        'public/style/**/*',
        'public/templates/**/*'
        ]
      }
    }
  };
};
