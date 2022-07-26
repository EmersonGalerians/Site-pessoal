class MobileNavbar {
    constructor(menu, list, navLinks) {
        this.menu = document.querySelector(menu);
        this.list = document.querySelector(list);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach(link => {
            link.style.animation ?
                (link.style.animation = '') :
                (link.style.animation = 'navLinkFade .7s ease forwards');
        });
    }
    handleClick() {
        this.list.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent() {
        this.menu.addEventListener('click', this.handleClick);
    }
    init() {
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar('.menu', '.list', '.list li');
mobileNavbar.init();