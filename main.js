let toggle =  document.querySelector('.toggle')
let navigation =  document.querySelector('.navigation')
let main =  document.querySelector('.main')
let navbar =  document.querySelector('.navbar')

toggle.onclick = function() {
  toggle.classList.toggle('active')
  navbar.classList.toggle('active')
  navigation.classList.toggle('active') 
  main.classList.toggle('main')

}



// BLURRING LOADING 
const home = document.querySelector('.home');
const text =  document.querySelector('.loadText')

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
   load++

   if (load > 99) {
     clearInterval(int)
   }

   text.innerText = `${load}%`;
   text.style.opacity = scale(load, 0, 100, 1, 0)
   home.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max ) => {
return (num - in_min) * (out_max - out_min) / (in_max -in_min) + out_min;
}

// scroll control 

// window.addEventListener('scroll', () => {
//     const nav = document.querySelector('.navbar');
//     nav.classList.toggle('sticky', window.scrollY > 0);
//   });

//  testimonial 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active");
}
 