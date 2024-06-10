function animateCircle () {
    let mm = gsap.matchMedia();

    mm.add('(min-width: 1081px)', () => {
        const rotationScrollTrigger = {
            trigger: '.we-are__descr',
            start: '15% 80px',
            end: '+=600px',
            scrub: true,
        }


        const liftingScrollTrigger = {
            trigger: '.demo-item',
            start: '250px 20%',
            end: '+=500px',
            scrub: true
        }

        initCircleAnimation(rotationScrollTrigger, liftingScrollTrigger);
    })

    mm.add('(max-width: 1080px)', () => {
            const rotationScrollTrigger = {
                trigger: '.we-are__descr',
                start: '10% 100px',
                end: '+=700px',
                scrub: true
            }

            const liftingScrollTrigger = {
                trigger: '.demo-item',
                start: '80px 10%',
                end: '+=500px',
                scrub: true
            }

            initCircleAnimation (rotationScrollTrigger, liftingScrollTrigger);
    })
}

function initCircleAnimation (circleRotationScrollTrigger, circleLiftingScrollTrigger) {
    let circle = gsap.timeline();
    let yParameter = '-200px';

    const circleRotation = {
        rotate: 100,
        duration: 3,
        scrollTrigger: circleRotationScrollTrigger
    }

    const circleLifting = {
        keyframes: [
            {scale: 0.7, duration: 0.7},
            {y: yParameter, scale: 0.7, duration: 1.2}
        ],
        scrollTrigger: circleLiftingScrollTrigger
    }

    circle
    .to('.demo-item__ring', circleRotation)
    .to('.demo-item', circleLifting);
}

function animateTitle () {
    let titleWidth = getRect(qs('.header__title')).width;
    let marker = qs('.gallery-end-marker');

    gsap.to('.header__title p', {
        x: -(getRect(marker).right - titleWidth),
        duration: 50,
        repeat: -1,
        ease: 'linear'
    })
}

function animateGallery() {
    //LENGTH OF VISIBLE GALLERY === 100VH - PADDING(80PX) 
    let gallery = qs('.sm-and-partners__sm-gallery');
    let galleryLength = getRect(gallery).width;

    let galleryItems = qsa('.sm-and-partners__sm-gallery__item');

    let lastGalleryItem = galleryItems[galleryItems.length - 1];
    let lastGalleryItemWidth = getRect(lastGalleryItem).width;
    let lastGalleryItemX = getRect(lastGalleryItem).x;
    
    let totalTransition = lastGalleryItemX + lastGalleryItemWidth - galleryLength;

    gsap.to('.sm-and-partners__sm-gallery', {
        x: -totalTransition,
        duration: 100,
        repeat: -1,
        ease: 'linear'
    })
}

function animateCaseHero () {
    let tl = gsap.timeline();

    tl.to('.case-hero', {
        //height: 1200,
        height: 1300,
        scrollTrigger: {
            scrub: true,
            trigger: '.case-hero-wrapper',
            start: 'top top',
            end: '+=900px 20%',
        }
    })

    tl.to('.case-hero-wrapper', {
        //y: 100,
        y: 100,
        scrollTrigger: {
            trigger: '.case-hero-wrapper',
            start: 'top top',
            end: '+=900px 20%',
            scrub: true,
        }
    })

    tl.to('.case-hero img', {
        scale: 2,
        y: 80,
        scrollTrigger: {
            scrub: true,
            trigger: '.case-hero img',
            start: 'top top',
            end: '+=200% 50%',
        }
    })

    // tl.to('.nav', {
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: '.nav',
    //         start: '20px top',
    //         end: '300% 70px',

    //         pin: true,
    //         pinSpacing: false,
    //         markers: true
    //     },
    // })
}


//INITIALIZE AND RUN ALL ANIMATIONS
listenTo(window, 'load', ()=> {
    animateCircle ();
    animateTitle ();
    //animateCaseHero ();
    //animateGallery();
})


// function animateCaseHero () {
//     gsap.to('.case-hero img', {
//         scrollTrigger: {
//             trigger: '.case-hero',
//             scrub: 1,
//             pin: true,
//             markers: true,
//         },
//         scale: 2,
//         duration: 5,
//     })
// }

//part of case hero wrapper scroll trigger
//good and working but has padding at the top
            //id - 0022
            //old wrapper bad working
            //trigger: '.case-head',
            //start: '60px 27px',
            //endTrigger: '.case-head',
            //end: 'bottom 450px',