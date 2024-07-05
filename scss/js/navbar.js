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
