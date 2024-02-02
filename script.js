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

//Marquee

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
} 

//Slider two

const gallery = document.querySelectorAll('.gallery .gallery-image');
let previewBox = document.querySelector('.preview-box');
let previewImg = previewBox.querySelector('img');
const closeIcon = previewBox.querySelector('.closeIcon');
let currentImg = document.querySelector('.current-img');
let totalImg = document.querySelector('.total-img');

let currentIndex = 0; 

window.onload = () => {
  totalImg.textContent = gallery.length;

  gallery.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentIndex = index;
      updatePreview();
      showPreviewBox();
      updateButtonsVisibility();
    });
  });

  const nextBtn = document.querySelector('.nextSec');
  const prevBtn = document.querySelector('.prevSec');

  nextBtn.addEventListener('click', () => {
    if (currentIndex < gallery.length - 1) {
      currentIndex++;
      updatePreview();
    }
    updateButtonsVisibility();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updatePreview();
    }
    updateButtonsVisibility();
  });

  closeIcon.addEventListener('click', () => {
    hidePreviewBox();
  });
};

function updatePreview() {
  currentImg.textContent = currentIndex + 1;
  let selectedImgUrl = gallery[currentIndex].querySelector('img').src;
  previewImg.src = selectedImgUrl;
}

function showPreviewBox() {
  previewBox.classList.add('show-previewBox');
}

function hidePreviewBox() {
  previewBox.classList.remove('show-previewBox');
}

function updateButtonsVisibility() {
  const nextBtn = document.querySelector('.nextSec');
  const prevBtn = document.querySelector('.prevSec');

  if (currentIndex === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }

  if (currentIndex === gallery.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}


/* Third slider*/ 

function changeImage(imageSrc) {
  document.getElementById('main-image').src = imageSrc;
}
