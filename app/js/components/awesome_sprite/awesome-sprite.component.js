export default {
    bindings: {
        container: '<',
        height: '@',
        width: '@',
        blockSize: '@',
        onReady: '&',
    },
    controller: class AwesomeSpriteComponentController {
        constructor(AwesomeSprite) {
            'ngInject';

            this.AwesomeSprite = AwesomeSprite;
        }

        $onInit() {
            this.blockSize = parseInt(this.blockSize || 0, 10);
            this.width = parseInt(this.width || 64, 10);
            this.height = parseInt(this.height || 32, 10);
            this.aSprite = new this.AwesomeSprite(this.width, this.height, this.blockSize, this.container);
            this.aSprite.initialize();

            if (this.onReady) {
                this.onReady({
                    writeFB: this.writeFB.bind(this),
                    clearFB: this.clearFB.bind(this),
                });
            }
        }

        writeFB(x, y, sprite) {
            this.aSprite.writeFB(x, y, sprite);
        }

        clearFB() {
            this.aSprite.clearFB();
        }
    },
};
