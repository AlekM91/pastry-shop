class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger')
        this.mainNav = document.querySelector('.main-nav')
        this.mainMenu = document.querySelector('.main-menu')
        this.events()
    }

    events() {
        this.hamburger.addEventListener('click', this.menuToggle.bind(this))
    }

    menuToggle() {
        this.hamburger.classList.toggle('hamburger-active')
        this.mainNav.classList.toggle('main-nav-active')
        this.mainMenu.classList.toggle('main-menu-active')
    }
}


export default MobileMenu;