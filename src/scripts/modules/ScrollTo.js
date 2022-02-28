class ScrollTo {
    constructor() {
        this.navigation = document.querySelector('.main-menu');
        this.arrowButton = document.querySelector('.arrow');
        this.mainSection = document.querySelector('.section-1')
        this.buttonObserver = new IntersectionObserver(this.arrowObserve.bind(this), {root: null, threshold: 0});
        this.events()
    }

    events() {
        this.navigation.addEventListener('click', this.scroll.bind(this));
        this.arrowButton.addEventListener('click', this.scrollTop.bind(this));
        this.buttonObserver.observe(this.mainSection);
    }

    scroll(e) {
        e.preventDefault();
        this.id = e.target.getAttribute('href');
        document.querySelector(this.id).scrollIntoView({behavior: 'smooth'})
    }

    scrollTop() {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    arrowObserve(entries, observer) {
        let [entry] = entries;
        console.log(entries)
        this.arrowButton.classList.remove('arrow-visible')
        if(!entry.isIntersecting) {
            this.arrowButton.classList.add('arrow-visible')
        }
    }
}


export default ScrollTo;