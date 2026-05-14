(function() {
  const init = () => {
    const revealItems = document.querySelectorAll('.js-reveal');

    revealItems.forEach((item, index) => {
      item.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out');
      item.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-6');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => observer.observe(item));

    document.querySelectorAll('.js-press').forEach((button) => {
      button.addEventListener('pointerdown', () => {
        button.classList.add('scale-95');
      });

      ['pointerup', 'pointerleave', 'blur'].forEach((eventName) => {
        button.addEventListener(eventName, () => {
          button.classList.remove('scale-95');
        });
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();