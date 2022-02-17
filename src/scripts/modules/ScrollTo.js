class ScrollTo {
    constructor() {
        this.navigation = document.querySelector('.main-menu');
        this.events()
    }

    events() {
        console.log(this.navigation)
        this.navigation.addEventListener('click', this.scroll.bind(this))
    }

    scroll(e) {
        e.preventDefault();
        this.id = e.target.getAttribute('href');
        document.querySelector(this.id).scrollIntoView({behavior: 'smooth'})
    }
}


export default ScrollTo;