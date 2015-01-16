'use strict';

// Figure out controller filename from spec filename to automatically include it
var controller     = (/.*?(\w+)\.spec\.js/.exec(__filename).pop() || '');
var subject        = require('../../../controllers/' + controller);

describe(controller, function () {

  describe('#index', function () {

    var router = { get: sinon.spy(), post: sinon.spy() };

    it('should respond to GET requests', function () {
      subject(router);

      expect(router.get.called).to.equal(true);
      expect(router.get.calledWith('/')).to.equal(true);
    });

  });

});
