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

