const navToggle = document.querySelector(".navbar-toggle");
const links = document.querySelector("#nav-list");

navToggle.addEventListener('click', function(){
   links.classList.toggle("navActive");
})

