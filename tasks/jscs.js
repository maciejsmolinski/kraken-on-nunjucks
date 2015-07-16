'use strict';

/**
 * Runs JSCS against specified files to ensure best quality
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/jscs-dev/grunt-jscs
 */
module.exports = function jscs(grunt) {
  grunt.loadNpmTasks('grunt-jscs');

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
      'public/js/!(vendor)',
    ],
    options: {
      config: '.jscsrc',
      verbose: true
    }
  };
};
