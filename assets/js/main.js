const testimonialEl = document.querySelector('.testimonial-swiper');

if (testimonialEl && typeof Swiper !== 'undefined') {
  new Swiper(testimonialEl, {
    loop: true,
    speed: 700,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.t-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.t-next',
      prevEl: '.t-prev',
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 24 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
    },
  });
}

const galleryEl = document.querySelector('.gallery-swiper');

if (galleryEl && typeof Swiper !== 'undefined') {
  new Swiper(galleryEl, {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    grabCursor: true,
    speed: 700,
    coverflowEffect: {
      rotate: 28,
      stretch: 0,
      depth: 140,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.g-next',
      prevEl: '.g-prev',
    },
  });
}

const videoModal = document.getElementById("hs-video-modal");
const videoFrame = videoModal.querySelector("iframe");

// Modal close হলে video playback বন্ধ করো
videoModal.addEventListener("close.hs.overlay", () => {
  videoFrame.src = videoFrame.src;
});