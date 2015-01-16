'use strict';

/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-sails-linker');

  return {
    devJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: 'public',
        relative: false,
      },
      files: {
        'views/**/*.nunjucks': [
          'public/js/*.js'

        ]
      }
    },

    devTpl: {
      options: {
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: 'public',
        relative: false,
      },
      files: {
        'views/**/*.nunjucks': [
          'public/jst.js'
        ]
      }
    }

  };

};
