function opennav(){
    document.querySelector(".nav").style.left = '0';
     document.querySelector(".header__close-btn").style.display= 'block';
}

function closenav() {
//  var close = document.querySelector(".nav");
  
    document.querySelector(".nav").style.left = "-950px";
     document.querySelector(".header__close-btn").style.display ="none";
}