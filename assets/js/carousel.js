document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const prev = document.querySelector(".carousel-prev");
  const next = document.querySelector(".carousel-next");

  function showSlide(n) {
    slides.forEach(slide => slide.style.display = "none");
    slides[n].style.display = "block";
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  if (slides.length > 0) {
    showSlide(slideIndex);
  }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
});
