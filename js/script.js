document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');

    const textArray = ["Full Stack Web Developer", "Another Text"]; // Add more texts here
    const typingDelay = 200; // Delay between typing each character
    const erasingDelay = 100; // Delay between erasing each character
    const newTextDelay = 2000; // Delay before typing next text

    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        if (cursorSpan) {
            cursorSpan.classList.add('blink');
        }
        setTimeout(type, newTextDelay - 1500);
    });
});
