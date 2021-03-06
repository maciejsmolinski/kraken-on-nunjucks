module.exports = function (nunjucks) {
  'use strict';

  /**
   * Replaces all occurences of newline with <br> tags
   *
   *   Sample Usage:
   *
   *     {{ 'Hello\n\nWorld' | nl2br }} -> Hello<br><br>World
   *
   */
  return function nl2br(string) {
    return new nunjucks.runtime.SafeString(string.replace(/\n/g, '<br>'));
  };

};
