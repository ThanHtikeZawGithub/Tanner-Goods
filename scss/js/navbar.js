;(function($) {
  $(function() {
    $('#nav-toggle').click(function() {
      $('nav ul').toggleClass('active'); // Add 'active' class to 'nav ul'
      this.classList.toggle('active');
    });

    $('nav ul li > a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').slideToggle();
      e.stopPropagation();
    });

    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
  });
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  setActiveLink();
  window.addEventListener('scroll', setActiveLink);

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
