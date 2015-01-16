var chai = require('chai');

chai.config.includeStack = true;
chai.use(require('sinon-chai'));

global.expect         = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion      = chai.Assertion;
global.assert         = chai.assert;
global.sinon          = require('sinon');
