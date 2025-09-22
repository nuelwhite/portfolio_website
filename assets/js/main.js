// main javascript file for homepage - index.html

// mobile navigation toggle
const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

if (menuBtn && mobileMenu){
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}


// smooth scroll for anchor links

document.querySelectorAll('a[href^="#"]').forEach( anchor => {
    anchor.addEventListener("click",function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Auto update footer year
const yearSpan = document.getElementById("year");
if (yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}