// Sử dụng JavaScript để nạp header và footer
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
});

fetch('footer.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('footer').innerHTML = data;
});

// Scroll Header
window.addEventListener('scroll', function() {
  var header = document.querySelector('.scroll-header');
  var scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add('header-background');
  } else {
    header.classList.remove('header-background');
  }
});

// Header toggle
var MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
});

// Typing Effect

// var typed = new Typed('.auto-input', {
//   strings: ['Front-End Developer!', 'Freelancer!', 'UI Designer'],
//   typeSpeed: 100, 
//   backSpeed: 100, 
//   backDelay: 2000,
//   loop: true,
// });

