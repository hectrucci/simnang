// libs
import angular from 'angular';
import 'ez-ng';
import AwesomeSprite from 'awesome-sprite';

// services
import Sprites, { initialSprites } from './services/sprites.service';

// components
import AwesomeSpriteComponent from './components/awesome_sprite/awesome-sprite.component';
import HomeComponent from './components/home/home.component';
import SpriteDrawerComponent from './components/sprite_drawer/sprite_drawer.component';

// styles
import '../styles/styles.global.scss';

export default angular
    .module('simnang', ['simnang.templates', 'simnang.styles', 'ezNg'])
    .value('AwesomeSprite', AwesomeSprite)
    .constant('Sprites', Sprites)
    .constant('initialSprites', initialSprites)
    .component('home', HomeComponent)
    .component('awesomeSprite', AwesomeSpriteComponent)
    .component('spriteDrawer', SpriteDrawerComponent).name;
