'use strict';

/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function clean(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');

  return {
    tmp: '.tmp',
    build: '.build',
    doc: 'doc',
    coverage: 'spec/coverage',
    sassCache: '.sass-cache',
    jst: 'public/jst.js',
  };

};
