// JOIN Button
join = document.querySelector('.btn-lg');

join.addEventListener('click', ()=> {
  window.location = "https://wa.me/919758335415?text=Hye!%20Dushyant%0AI%20would%20like%20to%20join%20Day%20Dream%20Library";  
})


// GALLERY SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slideIndex++;                                       // For Automatic Slideshow
  // if (slideIndex > slides.length) {slideIndex = 1}    // For Automatic Slideshow
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // setTimeout(showSlides, 5000);                       // For Automatic Slideshow

}