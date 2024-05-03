// Text animation
const typedTextSpan = document.getElementById('typed-text');
const textArray = ['Full Stack Web Developer','Problem Solver']; // Add more text options if needed
const typingDelay = 100; // Delay between typing each character
const erasingDelay = 100; // Delay between erasing each character
const newTextDelay = 2000; // Delay before typing the next text

let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    // After typing the first text, wait a bit and then start typing the second text
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    // If erasing is complete, move to the next text index
    textIndex++;
    if (textIndex >= textArray.length) {
      textIndex = 0; // Loop back to the beginning if reached the end
    }
    // Start typing the next text
    setTimeout(type, typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Start typing the first text immediately
  setTimeout(type, 0);
});
