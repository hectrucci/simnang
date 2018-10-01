import angular from 'angular';

/**
 * Module that replaces the global Promise object with Angular's $q service.
 * This allows source code to use async/await with Babel's Regenerator Runtime,
 * and let the test code work as expected.
 */
export default angular.module('test', []).run($q => {
    'ngInject';

    window.Promise = $q;
}).name;

beforeEach(angular.mock.module('test'));
beforeEach(angular.mock.module('simnang.templates'));
beforeEach(angular.mock.module('simnang.styles'));
