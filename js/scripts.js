document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay blocked:", error));
        }
    });
});

