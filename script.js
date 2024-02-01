const slides = document.querySelectorAll('.slides .card');
const dots = document.querySelectorAll('.pagination .dot');
let slideIndex = 0;
let slidesPerView = 3; 

initializeSlider();

function initializeSlider() {
  showSlides(slideIndex);
  adjustSlidesPerView();
}

function showSlides(index) {
  slides.forEach((slide) => (slide.style.display = 'none'));
  dots.forEach((dot) => dot.classList.remove('active'));
  for (let i = index; i < index + slidesPerView; i++) {
    if (slides[i]) {
      slides[i].style.display = 'block';
    }
  }
  dots[index / slidesPerView].classList.add('active');
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex -= slidesPerView;
  } else {
    slideIndex = slides.length - slidesPerView;
  }
  showSlides(slideIndex);
}

function nextSlide() {
  if (slideIndex < slides.length - slidesPerView) {
    slideIndex += slidesPerView;
  } else {
    slideIndex = 0;
  }
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = (n - 1) * slidesPerView;
  showSlides(slideIndex);
}

function adjustSlidesPerView() {
  if (window.innerWidth <= 768) {
    slidesPerView = 1; 
    hidePagination(); 
  } else {
    slidesPerView = 3; 
    showPagination();
  }

  showSlides(slideIndex);
}
function hidePagination() {
  const pagination = document.querySelector('.pagination');
  if (pagination) {
    pagination.style.display = 'none';
  }
}

function showPagination() {
  const pagination = document.querySelector('.pagination');
  if (pagination) {
    pagination.style.display = 'flex';
  }
}


window.addEventListener('resize', adjustSlidesPerView);
