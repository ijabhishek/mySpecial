// Typing Effect for Message
const message = "Happy Valentine's Day My Love ! 💖";
let i = 0;
const speed = 50; // Typing speed

function typeWriter() {
    if (i < message.length) {
        document.querySelector(".typing-text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;

// Falling Hearts Effect
function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".hearts-container").appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
