document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.dropdown-content a');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        const category = this.dataset.category;
        filterGallery(category);
      });
    });
  
    function filterGallery(category) {
      galleryItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }
  });
  