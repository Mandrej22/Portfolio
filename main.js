const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const iconToggle = document.querySelector("#iconToggle");


navToggle.addEventListener('click', () => {

    const visibility = primaryNav.getAttribute("data-visible");
    
    iconToggle.classList.remove("fa-bars");
    iconToggle.classList.add("fa-x");

    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        
    }else{
        primaryNav.setAttribute("data-visible", false);
        iconToggle.classList.add("fa-bars");
        iconToggle.classList.remove("fa-x");
    }

})



