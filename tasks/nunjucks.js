'use strict';

/**
 * Precompiles Nunjucks templates to a `.jst` file.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/jlongster/grunt-nunjucks
 *
 */
 module.exports = function nunjucks(grunt) {
   grunt.loadNpmTasks('grunt-nunjucks');

   return {
    precompile: {
      src: ['public/templates/**/*.nunjucks'],
      dest: 'public/jst.js',
      options: {
        name: function (filename) {
          return filename.replace(/public\/templates\/(.*)/, '$1');
        }
      }
    }
  };

 };
