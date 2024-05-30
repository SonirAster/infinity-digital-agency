function animateCircle () {
    let circle = gsap.timeline();

    const primaryAnimTrigger = {
        trigger: '.demo-item',
        start: 'top 50%',
        end: '+=600px',
        scrub: true
    }
    
    const secondaryAnimTrigger = {
        trigger: '.demo-item',
        start: '250px 50%',
        end: '+=600px',
        scrub: true
    }
    
    const roundSecondaryAnim = {
        keyframes: [
            {scale: 0.7, duration: 0.7},
            {y: '-200px', scale: 0.7, duration: 1.2}
        ],
        scrollTrigger: secondaryAnimTrigger
    }
    
    circle.to('.demo-item__ring', {
        rotate: 100,
        duration: 3,
        scrollTrigger: primaryAnimTrigger
    }).to('.circle', roundSecondaryAnim);
}

function animateTitle () {
    let sizeTrigger = {
        trigger: '.header__pretitle',
        start: 'top 100',
        endTrigger: '.header__title',
        end: 'bottom -200px',
        scrub: true,
    }

    gsap.to('.header__title p', {
        y: -50,
        duration: 2,
        scrollTrigger: sizeTrigger,
        scale: 0.8
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

//INITIALIZE AND RUN ALL ANIMATIONS
listenTo(window, 'load', ()=> {
    animateCircle ();
    animateTitle ();
    //animateGallery();
})


function skewCases() {
    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".cases__item__cover", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

    ScrollTrigger.create({
        onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300);
            // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
            }
        }
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".ases__item__cover", {
        transformOrigin: "right center",
        force3D: true,
        y: -50
    });
}

function raiseCases () {
    gsap.to('.cases__item', {
        y: 70,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.header__subheader',
            start: 'top +=50px',
            endTrigger: '.nav',
            end: 'top 600px',
            scrub: true
        },
        stagger: {
            each: 0.1
        }
    })
}

function fadeInCases () {
    gsap.to('.cover', {
        scrollTrigger: {
            trigger: '.cases',
            start: 'top 200px',
            end: 'bottom center',
            scrub: true,
        },
        duration: 0.8,
        stagger: {
            each: 0.1
        },
        opacity: 1
    })
}


//fadeInCases ();
//raiseCases ();
//skewCases ();





