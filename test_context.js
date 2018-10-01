/**
 * This is the test entry point.
 * It collects and injects all specs and templates into the test runtime.
 */

let req = require.context('./app', true, /(\.spec\.js|\.spec\.html)$/);

// load angular mocks into the test suite
require('angular-mocks');
// load some helper functions
require('./lib/angular_test_module');

// load all the specs into the test suite
req.keys().forEach(key => {
    req(key);
});
