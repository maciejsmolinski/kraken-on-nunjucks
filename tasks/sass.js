'use strict';

/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-sass
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');

  return {
    build: {
      options: {
        style: 'expanded'
      },
      files: [{
        expand: true,
        cwd: 'public/styles',
        src: ['app.scss'],
        dest: '.build/styles/',
        ext: '.css'
      }]
    }
  };

};
