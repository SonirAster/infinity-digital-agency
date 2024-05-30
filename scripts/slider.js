function initPortfolioSlider (item) {
    let portfolioSliderGallery = Array.from(item.querySelectorAll('.portfolio-cases__case__slider__gallery__item'))

    const slider = {
        slider: item.querySelector('.portfolio-cases__case__slider__gallery'),
        slideWidth: getRect(portfolioSliderGallery[0]).width,
        firstSlide: portfolioSliderGallery[0],
        lastSlide: portfolioSliderGallery.at(-1),
        nextBtn: item.querySelector('#portfolio-next'),
        prevBtn: item.querySelector('#portfolio-prev')
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
        updateBulletsPanel ();
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
        updateBulletsPanel ();
    })

    createBulletsPanel ();

    function createBulletsPanel () {
        let sliderBulletsPanel = item.querySelector('.portfolio-cases__case__slider__bullets');
        for (let i = 0; i < portfolioSliderGallery.length; i++) {
            let bullet = document.createElement('i');
            bullet.classList.add('portfolio-cases__case__slider__bullets__bullet');
            sliderBulletsPanel.appendChild(bullet);
        };
        updateBulletsPanel ();
    }

    function updateBulletsPanel () {
        let bullets = item.querySelectorAll('.portfolio-cases__case__slider__bullets__bullet');
        bullets.forEach(item => item.classList.remove('bullet-selected'));
        bullets[selectedSlide].classList.add('bullet-selected');
    }
}

let sliders = qsa('.portfolio-cases__case__slider');
sliders.forEach(slider => {
    initPortfolioSlider(slider)
})