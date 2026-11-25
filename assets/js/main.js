(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('nav');
    var navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        var expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('is-open');
      });
    }

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav) nav.classList.remove('is-open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    var sections = document.querySelectorAll('section[id]');
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              var href = link.getAttribute('href');
              link.classList.toggle('is-active', href === '#' + id);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  });
})();