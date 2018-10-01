import angular from 'angular';
import simnangApp from './simnang_module';

angular.element(document).ready(() => {
    angular.bootstrap(document, [simnangApp]);
});
