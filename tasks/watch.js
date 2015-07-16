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
module.exports = function watch(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');

  return {
    reload: {
      files: [ 'Gruntfile.js', 'tasks/*.js' ],
      options: {
        reload: true
      }
    },
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
