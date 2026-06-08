// Typing Effect Logic
const words = ["Developer.", "Designer.", "Video Editor."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseDelay = 2000;

function typeEffect() {
    const currentWord = words[wordIndex];
    const targetElement = document.getElementById('changing-txt');

    if (isDeleting) {
        // Remove a character
        targetElement.innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add a character
        targetElement.innerHTML = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    // Logic to switch between typing, pausing, and deleting
    if (!isDeleting && charIndex === currentWord.length) {
        speed = pauseDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500; // Small pause before starting the next word
    }

    setTimeout(typeEffect, speed);
}

// Initialize typing effect on load
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// Theme switch
const toggleButton = document.getElementById('theme-toggle');

// Check local storage for user's preference on initial load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
    
    if (isLightMode) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
