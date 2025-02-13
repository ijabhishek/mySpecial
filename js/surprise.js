
// Generate Falling Stars
function createStar() {
    let star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    // Random Position
    let startX = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;

    star.style.left = `${startX}px`;
    star.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

setInterval(createStar, 200);
