(function() {
  var cartIcons = document.querySelectorAll('.item__price-icon');
  var modalOverlay = document.querySelector('.modal-overlay');
  var modalWrapper = document.querySelector('.modal-wrapper');

  if (modalOverlay && modalWrapper) {
    Array.prototype.forEach.call(cartIcons, function(cartIcon) {
      cartIcon.addEventListener('click', function(event) {
        event.preventDefault();
        modalOverlay.classList.add('modal--show');
        modalWrapper.classList.add('modal--show');
      });
    });

    modalOverlay.addEventListener('click', function(event) {
      event.preventDefault();
      modalOverlay.classList.remove('modal--show');
      modalWrapper.classList.remove('modal--show');
    });
  }
})();
