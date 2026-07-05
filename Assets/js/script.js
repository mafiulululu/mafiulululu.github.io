const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const typingText = document.getElementById("typingText");

const words = [
    "AI-Driven Full Stack Developer",
    "PHP & JavaScript Developer",
    "Problem Solver",
    "Future Software Engineer"
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

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeEffect, speed);
}

typeEffect();