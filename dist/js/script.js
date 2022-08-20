// humberger menu
const humberger = document.querySelector('header');
const humbergerActive = document.querySelector('#humberger');
const menuNav = document.querySelector('nav');

humbergerActive.addEventListener('click', function(){
  humbergerActive.classList.toggle('humberger-active');
  menuNav.classList.toggle('hidden');
});

// navbar fixed
const fixed = humberger.offsetTop;
window.onscroll = function(){
  if (window.pageYOffset > fixed) {
    humberger.classList.add('nav-fixed');
}else{
    humberger.classList.remove('nav-fixed');
};
}

