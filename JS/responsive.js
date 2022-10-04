openHamburger = document.querySelector('.fa-bars');
closeHamburger = document.querySelector('.fa-xmark');
popup = document.querySelector('.popup-mobile-menu');
navList = document.querySelectorAll('.mobile-nav li a')

closeHamburger.classList.toggle('fa-xmark');               // Currently, class="fa-xmark" removed. (By Default)

// When hamburger menu open
openHamburger.addEventListener('click', ()=> {
    openHamburger.classList.remove('fa-bars');
    closeHamburger.classList.add('fa-xmark');
    popup.classList.add('open');
});

// When hamburger menu close
closeHamburger.addEventListener('click', ()=> {
    openHamburger.classList.add('fa-bars');
    closeHamburger.classList.remove('fa-xmark');
    popup.classList.remove('open');
});


// Hamburger Menu Auto-Close after clicking on ".mobile-nav li a"
for(let i=0; i<navList.length; i++){
    navList[i].addEventListener('click', ()=> {
        closeHamburger.click();
    });
}