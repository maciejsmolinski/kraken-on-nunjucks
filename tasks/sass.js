'use strict';

/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/sindresorhus/grunt-sass
 */
module.exports = function sass(grunt) {
  grunt.loadNpmTasks('grunt-sass');

  return {
    build: {
      options: {
        style: 'expanded',
        sourceMap: true,
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
