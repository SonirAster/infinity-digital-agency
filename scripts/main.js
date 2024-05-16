const qs = (val) => {
    let item = document.querySelector(val);
    return item;
}

const listenTo = (item, ev, fn) => {
    item.addEventListener(ev, fn)
}

const toggle = (item, name) => {
    item.classList.toggle(name)
}


initUnfoldingItems ();
initMobileMenu ();


function initUnfoldingItems () {
    let pluses = document.querySelectorAll('.services__list__item__title__btn');
    let folds = document.querySelectorAll('.services__list__item__descr');
    let items = document.querySelectorAll('.services__list__item');

    for (let i = 0; i < pluses.length; i++) {
        listenTo(pluses[i], 'click', () => {
            toggle(folds[i], 'opened');
            toggle(pluses[i], 'toggled');
            toggle(items[i], 'item-unfolded');
        })
    }
}

function initMobileMenu () {
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





// const contactTextarea = document.querySelector('.contacts__main__form__text textarea');
// contactTextarea.addEventListener('input', () => {
//     contactTextarea.style.height = 'auto';
//     contactTextarea.style.height = `${contactTextarea.scrollHeight}px`;
// });
//const mainTitle = qs('.header__title');

// listenTo(window, 'scroll', () => {
//     console.log(window.scrollY);
// })



