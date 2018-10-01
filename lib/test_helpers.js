import angular from 'angular';

/**
 * Since our components rely on $element and $attrs to add styles (ezComponentHelpers)
 * we need to pass mocked $element and $attrs into ComponentController constructor.
 * This is a helper function to easily achieve that.
 *
 * @param {{}} providers Other dependencies to pass to ComponentController
 * @returns {{}} All local dependencies for the ComponentController
 */

function augmentWithMockDOM(providers) {
    const $element = angular.element('<div></div>');
    const $attrs = $element.attrs;

    return {
        $element,
        $attrs,
        ...providers,
    };
}

export { augmentWithMockDOM };
