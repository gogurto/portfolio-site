function parallax() {
    var scrollTop = window.pageYOffset;
  
    document.querySelectorAll('[data-speed]').forEach(function(section) {
      var speed = section.getAttribute('data-speed');
      var offset = scrollTop * speed / 10;
  
      section.style.backgroundPositionY = offset + 'px';
    });
  }
  
  window.addEventListener('scroll', parallax);
  