import angular from 'angular';
import { augmentWithMockDOM } from 'test_helpers';

describe('simnang.SpriteDrawer Component', () => {
    let $componentController;
    let spriteDrawerComponentController;

    beforeEach(angular.mock.module('simnang'));

    beforeEach(
        angular.mock.inject($injector => {
            $componentController = $injector.get('$componentController');
        }),
    );

    beforeEach(() => {
        spriteDrawerComponentController = $componentController('spriteDrawer', augmentWithMockDOM());
        spriteDrawerComponentController.$element = angular.element(
            '<div><div class="awesome-sprite-container"></div></div>',
        );

        spriteDrawerComponentController.writeFB = angular.noop;
        spriteDrawerComponentController.clearFB = angular.noop;
        spriteDrawerComponentController.x = '10';
        spriteDrawerComponentController.y = '5';
        spriteDrawerComponentController.sprite = '10101010,10101010,10101010';
    });

    describe('#$onInit()', () => {
        it('should set awesomeSpriteContainer', () => {
            // when
            spriteDrawerComponentController.$onInit();

            // then
            expect(spriteDrawerComponentController.awesomeSpriteContainer.outerHTML).toEqual(
                '<div class="awesome-sprite-container"></div>',
            );
        });

        it('should call setInitialInputValues', () => {
            // given
            spyOn(spriteDrawerComponentController, 'setInitialInputValues');

            // when
            spriteDrawerComponentController.$onInit();

            // then
            expect(spriteDrawerComponentController.setInitialInputValues).toHaveBeenCalled();
        });
    });

    describe('#generateSprite()', () => {
        it('should generate a new sprite', () => {
            // given
            spyOn(spriteDrawerComponentController, 'writeFB');

            // when
            spriteDrawerComponentController.generateSprite();

            // then
            expect(spriteDrawerComponentController.writeFB).toHaveBeenCalledWith(10, 5, [170, 170, 170]);
        });
    });

    describe('#clearSprite()', () => {
        it('should call clearFB', () => {
            // given
            spyOn(spriteDrawerComponentController, 'clearFB');

            // when
            spriteDrawerComponentController.clearSprite();

            // then
            expect(spriteDrawerComponentController.clearFB).toHaveBeenCalled();
        });
    });

    describe('#setInitialInputValues()', () => {
        it('should set values to their initial state', () => {
            // when
            spriteDrawerComponentController.setInitialInputValues();

            // then
            expect(spriteDrawerComponentController.x).toEqual(0);
            expect(spriteDrawerComponentController.y).toEqual(0);
            expect(spriteDrawerComponentController.sprite).toEqual('');
        });
    });
});
