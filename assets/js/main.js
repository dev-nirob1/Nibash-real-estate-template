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