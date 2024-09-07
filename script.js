document.querySelectorAll('.slider').forEach((slider, sliderIndex) => {
    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slider-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        return setInterval(() => {
            nextSlide();
        }, 5000); // Interval 5 detik
    }

    // Tambahkan event listener ke tombol kontrol slider
    const controls = document.querySelectorAll('.slider-controls')[sliderIndex];
    controls.querySelector('.next-slide').addEventListener('click', nextSlide);
    controls.querySelector('.prev-slide').addEventListener('click', prevSlide);

    // Mulai auto slide untuk slider ini
    startAutoSlide();
});
