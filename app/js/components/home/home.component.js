import './home.component.html';
import './home.component.scss';

export default {
    templateUrl: 'home.component.html',
    controller: class HomeComponentController {
        constructor($scope, $element, $attrs, ezComponentHelpers) {
            'ngInject';

            const componentHelpers = ezComponentHelpers($scope, $element, $attrs, this);
            componentHelpers.useStylesUrl('home.component.css');
        }
    },
};
