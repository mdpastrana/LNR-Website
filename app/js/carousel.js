"use strict";

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slideNum;
  let slides = document.getElementsByClassName("testimonial__slides");
  let dots = document.getElementsByClassName("testimonial__dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (slideNum = 0; slideNum < slides.length; slideNum++) {
    slides[slideNum].style.display = "none";
  }
  for (slideNum = 0; slideNum < dots.length; slideNum++) {
    dots[slideNum].className = dots[slideNum].className.replace(
      " testimonial__active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " testimonial__active";
}
