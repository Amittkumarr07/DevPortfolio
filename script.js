document.addEventListener("DOMContentLoaded", () => {
    
    // --- Typing Effect Logic ---
    const words = ["Developer.", "Designer.", "Video Editor."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDelay = 2000;
    
    // Cache the DOM element once for better performance
    const targetElement = document.getElementById('changing-txt');

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            targetElement.innerHTML = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            targetElement.innerHTML = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = pauseDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500; 
        }

        setTimeout(typeEffect, speed);
    }

    // Start typing effect
    if (targetElement) {
        typeEffect();
    }


    // --- Theme Switcher Logic ---
    const toggleButton = document.getElementById('theme-toggle');

    // Apply saved theme immediately
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Handle button click
    if (toggleButton) {
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
    }
});
