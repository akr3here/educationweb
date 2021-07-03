burger = document.querySelector('.burger')  ;  // it select the class or id given here
navbar = document.querySelector('.navbar')  ;  // it select the class or id given here
navleft = document.querySelector('.nav-left') ;   // it select the class or id given here
navright = document.querySelector('.nav-right');    // it select the class or id given here

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-class-resp');
    navleft.classList.toggle('v-class-resp');
    navright.classList.toggle('v-class-resp');
})