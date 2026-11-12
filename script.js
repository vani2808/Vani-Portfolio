
// Get the menu button and navigation links
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open or close the mobile navigation
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close the menu after clicking a navigation link
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Automatically display the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
