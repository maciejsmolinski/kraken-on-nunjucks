module.exports = function (config) {
  'use strict';

  /**
   * Get nunjucks and nunjucks env handlers, retrieve extensions dir
   */
  var nunjucks            = require('nunjucks');
  var nunjucksFiltersDir  = config.get('view engines:nunjucks:extensions');
  var nunjucksEnvironment = nunjucks.configure(config.get('express:views'));

  /**
   * Loading nunjucks filters from views/extensions dir
   */
  require('fs').readdir(nunjucksFiltersDir, function (err, files) {
    files
      .filter(function (file) { return /\.js$/.test(file); })
      .forEach(function (file) {
        nunjucksEnvironment.addFilter(file.replace(/(\.js$|\W)/g, ''), require(nunjucksFiltersDir + '/' + file)(nunjucks));
      });

  });

};
