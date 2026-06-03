const words = ["Developer.", "Designer.", "Creator."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('changing-txt').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // Pause before deleting
            return false;
        }
        timer = setTimeout(loopTyping, 150); // Typing speed
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('changing-txt').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500); // Pause before next word
            return false;
        }
        timer = setTimeout(loopDeleting, 100); // Deleting speed
    };
    loopDeleting();
}
typingEffect();

/*Theme switcher*/
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply light mode on page load if they chose it before
if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}

toggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark'); // Reverts to your default dark mode
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
