
//toggles navigation on mobile phone

function toggleNav() {
    document.querySelector(".nav_line").addEventListener("click", () => {
        document.querySelector(".navlist").classList.toggle("nav-toggle");
    });  
}

toggleNav();