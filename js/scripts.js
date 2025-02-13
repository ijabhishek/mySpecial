function showSurprise() {
    document.getElementById('surpriseContent').classList.remove('hidden');
    document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("songs/song0.mp3");

    // Play audio when user interacts (click/tap)
    document.body.addEventListener("click", function () {
        audio.play();
    }, { once: true }); // Ensures it plays only once automatically
});

}

