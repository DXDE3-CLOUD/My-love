// Toggle background music
const music = document.getElementById('backgroundMusic');
const musicButton = document.getElementById('musicButton');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.innerHTML = '<i class="fas fa-music"></i> Pause Music';
    } else {
        music.pause();
        musicButton.innerHTML = '<i class="fas fa-music"></i> Play Music';
    }
}

// Flip cards
function flipCard(card) {
    card.classList.toggle('flipped');
}
