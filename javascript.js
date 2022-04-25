const navToggle = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

});



/*
var menuIcon = document.getElementById("menu-icon");
*/
const menuIcon = document.querySelector(".menu-icon");


menuIcon.onclick = function(){
    menuIcon.classList.toggle("openmenu");
    
}

var Email = ("Info@Pono.com");
var Contacto = ("+57 3052236192");
var Name = ("Pono");
var Hermanos = ("Galleta y Alaska");


console.log(Name);


