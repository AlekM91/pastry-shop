import '../styles/styles.scss';
import MobileMenu from './modules/MobileMenu';
import scrollTo from './modules/ScrollTo';

if(module.hot) {
    module.hot.accept();
}

let mobileMenu = new MobileMenu;
let scroll = new scrollTo;
// Add other JS functionality here :)
