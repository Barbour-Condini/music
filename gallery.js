var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n<=slides.length) {
        showSlides(slideIndex += n);
    } else {
        showSlides(slideIndex = 1);
    }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  let navbuttons = document.getElementById('nav-buttons');
  navbuttons.style.display = 'block';
  let captionContainer = document.getElementById('caption-container');
  captionContainer.style.margin = '2px auto 100px auto';
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;

}

window.scrollTo(0,0);
