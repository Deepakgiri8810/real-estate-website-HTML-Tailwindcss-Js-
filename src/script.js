const mobileMenu=()=>{

    document.querySelector(".iconMenu").classList.toggle("mobileMenu");
    document.querySelector(".openMenu").classList.toggle("menuOpen");
    
}

document.querySelector(".iconMenu").addEventListener("click",mobileMenu)