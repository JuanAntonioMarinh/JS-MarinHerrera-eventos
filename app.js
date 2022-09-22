let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-230px"

function menuToggle (){
    if (menuStatus == false){
        menu.styles.marginLeft = "0px";
        let menuStatus = true;
    } else if (menuStatus == true){
        menu.style.marginLeft = "-230px";
        let menuStatus = false;
    }
}

menuBtn.onclick = menuToggle;