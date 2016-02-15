$(function() {

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var navDrawer = (function() {
    /* opens and closes navigation drawer */
    var drawer = $('#nav-drawer');
    var navIcon = $('.nav__icon--toggle'); 

    var init = function() {
      navIcon.on('click', function(evt) {
        if ($(this).closest('.nav__icon--toggle')) {
          drawer.toggleClass('nav__drawer--open');
        }
      });
    };

    return { init: init };

  })();

  var scrollEffects = (function() {

    var navContainer = $('.nav__container');
    var targetElement = $('#company');

    var scrollHandler = function(evt) {
      var current = $(this).scrollTop();
      var breakPoint = targetElement.position().top;

      if (current > breakPoint) {
        navContainer.addClass('nav__container--scrolled');
      } else {
        navContainer.removeClass('nav__container--scrolled');
      }
    };

    var init = function() {
      $(document).scroll(debounce(scrollHandler, 250));
    };

    return { init: init };

  })();


  navDrawer.init();
  scrollEffects.init();
});
