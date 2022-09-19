// hamburger = document.querySelector(".hamburger");
openHamburger = document.querySelector('.fa-bars');
closeHamburger = document.querySelector('.fa-xmark');
navbar = document.querySelector(".navbar");
midNav = document.querySelector(".midNav");
leftNav = document.querySelector(".leftNav");

closeHamburger.classList.toggle('fa-xmark');               // Currently, class="fa-xmark" removed.

// When hamburger menu open
openHamburger.addEventListener('click', ()=> {
    openHamburger.classList.toggle('fa-bars');             // Currently, class="fa-bars" removed.
    closeHamburger.classList.toggle('fa-xmark');           // Currently, class="fa-xmark" added.
    navbar.classList.toggle('h-nav-resp');
    midNav.classList.toggle('v-class-resp');
    leftNav.classList.toggle('v-class-resp');
});

// When hamburger menu close
closeHamburger.addEventListener('click', ()=> {
    openHamburger.classList.toggle('fa-bars');             // Currently, class="fa-bars" removed.
    closeHamburger.classList.toggle('fa-xmark');           // Currently, class="fa-xmark" added.
    navbar.classList.toggle('h-nav-resp');
    midNav.classList.toggle('v-class-resp');
    leftNav.classList.toggle('v-class-resp');
});


// Hamburger Menu Auto-Close after clicking on midNav <li> options i.e, navList
navList = document.querySelectorAll(".navList");    // Return all matches (not only the first)
for(let i=0; i<navList.length; i++){
    navList[i].addEventListener('click', ()=> {
        closeHamburger.click();
    });
}