const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

const typingText = document.getElementById("typingText");

const words = [
    "Software Quality Assurance Engineer",
    "Manual & API Testing Enthusiast",
    "Python, C#, C/C++ Programmer",
    "ML and NLP Learner",
    "Software Requirements Engineering Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const speed = isDeleting ? 55 : 95;
    setTimeout(typeEffect, speed);
}

typeEffect();