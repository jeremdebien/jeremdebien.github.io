/* Gallery */
const containers = document.querySelectorAll('.container');
const active = document.querySelectorAll('.thumb');

containers.forEach(container => {
  container.addEventListener('click', function(e){
    if(e.target.className == 'thumb') {
      const preview = container.querySelector('.prev');
      preview.src = e.target.src;
      preview.classList.add('effect');

      setTimeout(function(){
        preview.classList.remove('effect');
      }, 100)

      active.forEach(function(thumb){
        if (thumb.classList.contains('active')){
          thumb.classList.remove('active');
        }
      });

      e.target.classList.add('active');
    }
  });
});

