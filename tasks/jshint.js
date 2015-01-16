'use strict';

/**
 * Runs JSHint against specified files to ensure best quality
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = function jshint(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  return {
    backend: [
      'Gruntfile.js',
      'controllers/**/*.js',
      'extensions/*.js',
      'services/*.js',
      'tasks/*.js',
      'spec/**/*.js',
      'index.js',
    ],
    frontend: [
      'public/js/**/*.js',
    ],
    options: {
      jshintrc: '.jshintrc'
    }
  };
};
