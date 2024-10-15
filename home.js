AOS.init({
  duration: 1200,  // Slow down the animation
  easing: 'ease-in-out',
  once: false,  // Enable animation to trigger on every scroll
});

document.querySelector('button').addEventListener('click', () => {
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Adjust this based on your navbar height
        const topPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    });
});


// Fade-in effect on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
      }
  });
});

// Intersection Observer for the hero content
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.add('fade-in'); // Fade in on load

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              heroContent.classList.add('fade-in'); // Add class when in view
              observer.unobserve(entry.target); // Stop observing after it has been shown
          }
      });
  });

  observer.observe(heroContent); // Observe the hero content
});

