// Slideshow logic for automatic slide transitions every 5 seconds
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Initialize first slide as active
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    slide.style.opacity = '0';
  });
  slides[0].classList.add('active');
  slides[0].style.opacity = '1';

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
        slide.style.opacity = '1';
      } else {
        slide.classList.remove('active');
        slide.style.opacity = '0';
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Auto slide every 5 seconds
  let slideInterval = setInterval(nextSlide, 5000);

  // Hidden love note reveal
  const loveNoteBtn = document.getElementById('loveNoteBtn');
  const loveNoteMessage = document.getElementById('loveNoteMessage');
  loveNoteBtn.addEventListener('click', () => {
    if (loveNoteMessage.classList.contains('show-message')) {
      loveNoteMessage.classList.remove('show-message');
    } else {
      loveNoteMessage.classList.add('show-message');
    }
  });

  // Background music toggle
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  let musicPlaying = false;

  musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
      bgMusic.play();
      musicPlaying = true;
      musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  });
});
