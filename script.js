function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal('.first-article', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.illustration', { delay: 300, origin: 'right' });

ScrollReveal().reveal('.second-section p:first-child', {
  delay: 200,
  origin: 'bottom',
});
ScrollReveal().reveal('.second-section h1', {
  delay: 250,
  origin: 'bottom',
});
ScrollReveal().reveal('.second-section .features .first-feature', {
  delay: 300,
  origin: 'bottom',
});
ScrollReveal().reveal('.second-feature', {
  delay: 350,
  origin: 'bottom',
});
ScrollReveal().reveal('.third-feature', { delay: 400, origin: 'bottom' });

ScrollReveal().reveal(
  '.third-section article .third-section-article, .third-section article .image',
  {
    delay: 300,
    origin: 'bottom',
    interval: 200,
  }
);

ScrollReveal().reveal('.testimonial-3', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.testimonial-2', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.testimonial-1', { delay: 600, origin: 'left' });

ScrollReveal().reveal('footer .info', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('footer .sitemap', {
  delay: 250,
  origin: 'bottom',
});
ScrollReveal().reveal('footer .resources', {
  delay: 300,
  origin: 'bottom',
});
ScrollReveal().reveal('footer .company', {
  delay: 350,
  origin: 'bottom',
});
ScrollReveal().reveal('footer .portfolio', {
  delay: 400,
  origin: 'bottom',
});
