function closest(element, selector) {
  /* used in lieu of Element.closest for IE9+ and Android 4.1+ support */

  var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
  
  while(element) {
    if (matches.call(element, selector)) {
      return element;  
    } else {
      element = element.parentElement;
    }
  }
}

var navDrawer = (function() {
  /* opens and closes navigation drawer */
  var navRoot = document.querySelector('.nav--main'); 
  var drawer = document.getElementById('nav-drawer');

  var clickToggleHandler = function(evt) {
    console.log('click');
    if (closest(evt.target, '.nav__icon--toggle')) {
      drawer.classList.toggle('nav__drawer--open');
    }
  };

  var init = function() {
    console.log('initing');
    navRoot.addEventListener('click', clickToggleHandler);
  };

  return { init: init };

})();

console.log('run');

navDrawer.init();
