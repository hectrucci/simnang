import './sprite_drawer.component.html';
import './sprite_drawer.component.scss';

export default {
    templateUrl: 'sprite_drawer.component.html',
    controller: class SpriteDrawerComponentController {
        constructor($scope, $element, $attrs, $timeout, ezComponentHelpers, initialSprites) {
            'ngInject';

            const componentHelpers = ezComponentHelpers($scope, $element, $attrs, this);
            componentHelpers.useStylesUrl('sprite_drawer.component.css');

            this.$element = $element;
            this.$timeout = $timeout;
            this.initialSprites = initialSprites;
        }

        $onInit() {
            this.setInitialInputValues();
            this.awesomeSpriteContainer = this.$element[0].querySelector('.awesome-sprite-container');
        }

        generateSprite() {
            const spriteArray = this.sprite.split(',').map(value => parseInt(value.trim(), 2));
            this.writeFB(parseInt(this.x, 10) || 0, parseInt(this.y, 10) || 0, spriteArray);
        }

        setInitialInputValues() {
            this.x = 0;
            this.y = 0;
            this.sprite = '';
        }

        clearSprite() {
            if (this.clearFB) {
                this.clearFB();
            }
        }

        displayInitialSprites() {
            if (this.writeFB) {
                this.initialSprites.forEach((sprite, index) =>
                    this.$timeout(() => this.writeFB(sprite.x, sprite.y, sprite.sprite), 80 * index + 1),
                );
            }
        }

        onAwesomeSpriteReady(writeFB, clearFB) {
            this.writeFB = writeFB;
            this.clearFB = clearFB;
            this.$timeout(() => this.displayInitialSprites(), 500);
        }
    },
};
