// ===============================
// PROJECTFLOW - MAIN JAVASCRIPT
// ===============================


// 1. Page loaded message
document.addEventListener("DOMContentLoaded", function () {

    console.log("ProjectFlow website loaded successfully.");

});


// 2. Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// 3. Login button click
const loginButtons = document.querySelectorAll(".login-btn, .hero-btn");

loginButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("Opening Login Page...");

    });

});


// 4. Feature card interaction
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const featureName = this.querySelector("h3").textContent;

        console.log("Selected Feature:", featureName);

    });

});


// 5. Welcome message
setTimeout(function () {

    console.log(
        "Welcome to ProjectFlow - Employee Project Management System"
    );

}, 1000);