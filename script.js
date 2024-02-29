document.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.querySelectorAll('.galery-img');

  imageContainer.forEach(function(container) {

    container.addEventListener('mouseover', function() {
      const image = container.querySelector('img');
      image.style.filter = 'brightness(100%)';
      
      const icon = container.querySelector('.galery__eye');
      icon.style.opacity = '0';
    });

    container.addEventListener('mouseout', function() {
      const image = container.querySelector('img');
      image.style.filter = 'brightness(50%)';
      
      const icon = container.querySelector('.galery__eye');
      icon.style.opacity = '1';
    });
    
  });
});


