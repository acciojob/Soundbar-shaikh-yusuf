//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const audio = document.getElementById('audio');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        if (soundFile) {
            audio.src = `sounds/${soundFile}`;
            audio.play();
        }
    });
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});
