'use strict';

/**
 * Copy files between public and build folders
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/clavery/grunt-copy-to
 */
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
