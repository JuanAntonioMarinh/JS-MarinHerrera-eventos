let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-230px";

function menuToggle (){
    if (!menuStatus){
        menu.style.marginLeft = "0px";
        menuStatus = true;
        return;
    }

    menu.style.marginLeft = "-230px";
    menuStatus = false;
    
}

menuBtn.onclick = menuToggle;