let toggle =  document.querySelector('.menu');
let sidenav =  document.querySelector('.sidenav');
let closeBtn =  document.querySelector('.closeBtn')

toggle.onclick = function() { 
  toggle.classList.toggle('active');
  sidenav.classList.toggle('active'); 
  closeBtn.classList.toggle('active') 
}

jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.5,
});



 