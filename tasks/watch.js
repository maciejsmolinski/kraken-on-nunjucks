'use strict';

/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');

  return {
    backend: {
      files: [
        'Gruntfile.js',
        'controllers/**/*.js',
        'extensions/*.js',
        'services/*.js',
        'tasks/*.js',
        'spec/**/*.js',
        'index.js',
      ],
      tasks: ['test']
    },
    frontend: {
      files: [
        'public/**',
      ],
      tasks: ['test', 'build']
    }
  };

};
