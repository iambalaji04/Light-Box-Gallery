// Select all necessary elements
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Add click event to each gallery image
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.remove('hidden'); // Show lightbox
    lightboxImg.src = img.src; // Set clicked image in lightbox
  });
});

// Close lightbox when clicking the close button
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.add('hidden');
  }
});