window.addEventListener("scroll", function() {

  let scroll = window.scrollY;

  if (scroll > 800) {
    document.body.style.backgroundColor = '#2F4F4F';
  } else{
    document.body.style.backgroundColor = 'black';
  }

});