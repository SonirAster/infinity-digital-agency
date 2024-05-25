const qs = (val) => {
    let item = document.querySelector(val);
    return item;
}

const qsa = (val) => {
    let item = document.querySelectorAll(val);
    return item;
}

const listenTo = (item, ev, fn) => {
    item.addEventListener(ev, fn)
}

const toggle = (item, name) => {
    item.classList.toggle(name)
}

const getRect = (item) => {
    return item.getBoundingClientRect();
}

initUnfoldingItems ();
initNavigationMenu ();
initContactForms ();
initFooter ();
initPortfolioSlider();

function initUnfoldingItems () {
    let pluses = qsa('.services__list__item__title__btn');
    let folds = qsa('.services__list__item__descr');
    let items = qsa('.services__list__item');
    
    for (let i = 0; i < pluses.length; i++) {
        listenTo(pluses[i], 'click', () => {
            toggle(folds[i], 'opened');
            toggle(pluses[i], 'toggled');
            toggle(items[i], 'item-unfolded');
        })
    }
}

function initNavigationMenu () {
    const nav = qsa('.nav');
    fetch('../templates/navigation menu.html').then(res => {
        return res.text();
    }).then(data => {
        nav.forEach(menu => {
            menu.innerHTML = data;
            initMobileMenu();
        })
    })
    
    function initMobileMenu() {
        const mobMenu = qs('.nav');
        const mobCancelButton = qs('.nav__logo__cancel');
        const mobMenuIcon = qs('.nav__panel__menu-icon');
        const footer = qs('.footer');
    
        listenTo(qs('.nav__logo a'), 'click', () => {
            mobMenu.classList.remove('toggled');
            footer.classList.remove('toggled');
            qs('html').style.overflowY = 'scroll';
        })
    
        listenTo(mobMenuIcon, 'click', () => {
            toggle(mobMenu, 'toggled');
            toggle(footer, 'toggled');
            qs('html').style.overflowY = 'hidden';
        })
    
        listenTo(mobCancelButton, 'click', () => {
            toggle(mobMenu, 'toggled');
            toggle(footer, 'toggled');
            qs('html').style.overflowY = 'scroll';
        })
    }
}

function initContactForms () {
    const contactSection = qsa('.contacts');
    fetch('../templates/contacts.html').then(res => {
        return res.text()
    }).then(data => {
        contactSection.forEach(el => {
            el.innerHTML = data;
        })
    })
}

function initFooter () {
    const footer = qs('.footer');
    fetch('../templates/footer.html')
    .then(res => {return res.text()})
    .then(data => {footer.innerHTML = data})
}

function initPortfolioSlider () {
    let portfolioSliderGallery = Array.from(qsa('.portfolio-cases__case__slider__gallery__item'))

    const slider = {
        slider: qs('.portfolio-cases__case__slider__gallery'),
        slideWidth: getRect(portfolioSliderGallery[0]).width,
        firstSlide: portfolioSliderGallery[0],
        lastSlide: portfolioSliderGallery.at(-1),
        nextBtn: qs('#portfolio-next'),
        prevBtn: qs('#portfolio-prev')
    }

    let selectedSlide = 0;
    let lastSlideIndex = portfolioSliderGallery.indexOf(slider.lastSlide);

    listenTo(slider.prevBtn, 'click', () => {
        if (selectedSlide == 0) {
            selectedSlide = lastSlideIndex;
            slider.slider.scroll({ 
                left: getRect(slider.lastSlide).left, 
                behavior: "smooth" 
            });
        } else {
            slider.slider.scrollBy({
                left: -slider.slideWidth,
                behavior: 'smooth'
            });
            selectedSlide -= 1;
        }
    })

    listenTo(slider.nextBtn, 'click', () => {
        if (selectedSlide < lastSlideIndex) {
            slider.slider.scrollBy({
                left: (slider.slideWidth + 1),
                behavior: 'smooth'
            });
            selectedSlide += 1;
        } else {
            selectedSlide = 0;
            slider.slider.scroll({ 
                left: getRect(slider.firstSlide).left, 
                behavior: "smooth" 
            });
        }
    })
}






// const contactTextarea = document.querySelector('.contacts__main__form__text textarea');
// contactTextarea.addEventListener('input', () => {
//     contactTextarea.style.height = 'auto';
//     contactTextarea.style.height = 
//`${contactTextarea.scrollHeight}px`;
// });
//const mainTitle = qs('.header__title');

// listenTo(window, 'scroll', () => {
//     console.log(window.scrollY);
// })

