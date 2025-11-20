
// Smooth scroll for navbar links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Sticky navbar color change on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});

// Order button popup message
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".btn").addEventListener("click", () => {
        const popup = document.getElementById("order-popup");
        popup.style.display = "block";
        setTimeout(() => popup.style.display = "none", 2000);
    });

});

// Client auto-scroll slider effect
let scrollClient = document.getElementById("client");
let x = 0;

setInterval(() => {
    x -= 1;
    scrollClient.style.transform = `translateX(${x}px)`;
    if (Math.abs(x) > scrollClient.scrollWidth / 2) x = 0;
}, 20);

// Form validation
document.querySelector("form").addEventListener("submit", function(e){
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if(name === "" || email === "") {
        alert("Please fill all fields!");
        e.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});
