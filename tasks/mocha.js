'use strict';

/**
 * Tests js using Mocha
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-mocha-test
 */
module.exports = function(grunt) {

	grunt.config.set('mochaTest', {
	  test: {
        options: {
          reporter: 'spec',
          require: './spec/config/chai_helper'
        },
        src: ['spec/**/**/*.spec.js']
      },
	});

	grunt.loadNpmTasks('grunt-mocha-test');
};
