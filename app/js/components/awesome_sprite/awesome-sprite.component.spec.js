import angular from 'angular';
import { augmentWithMockDOM } from 'test_helpers';

describe('simnang.AwesomeSprite Component', () => {
    let $componentController;
    let awesomeSpriteComponentController;

    beforeEach(angular.mock.module('simnang'));

    beforeEach(
        angular.mock.inject($injector => {
            $componentController = $injector.get('$componentController');
        }),
    );

    beforeEach(() => {
        awesomeSpriteComponentController = $componentController('awesomeSprite', augmentWithMockDOM());

        spyOn(awesomeSpriteComponentController, 'AwesomeSprite').and.returnValue({
            initialize: angular.noop,
            writeFB: angular.noop,
            clearFB: angular.noop,
        });
    });

    describe('#$onInit()', () => {
        it('should set awesome sprite', () => {
            // when
            awesomeSpriteComponentController.$onInit();

            // then
            expect(awesomeSpriteComponentController.aSprite).toEqual({
                initialize: angular.noop,
                writeFB: angular.noop,
                clearFB: angular.noop,
            });
        });
    });

    describe('#writeFB', () => {
        it('should call AwesomeSprite.writeFB', () => {
            // given
            awesomeSpriteComponentController.$onInit();
            spyOn(awesomeSpriteComponentController.aSprite, 'writeFB');

            // when
            awesomeSpriteComponentController.writeFB(2, 3, [0b10101010]);

            // then
            expect(awesomeSpriteComponentController.aSprite.writeFB).toHaveBeenCalledWith(2, 3, [0b10101010]);
        });
    });

    describe('#clearFB', () => {
        it('should call AwesomeSprite.clearFB', () => {
            // given
            awesomeSpriteComponentController.$onInit();
            spyOn(awesomeSpriteComponentController.aSprite, 'clearFB');

            // when
            awesomeSpriteComponentController.clearFB();

            // then
            expect(awesomeSpriteComponentController.aSprite.clearFB).toHaveBeenCalled();
        });
    });
});
