document.addEventListener('DOMContentLoaded', function () {
    const audioSwitch = document.getElementById('audioSwitch');
    if (audioSwitch) {
        // Element exists, so add the event listener
        audioSwitch.addEventListener('change', function () {
            toggleAudio();
        });

        // Trigger the change event to ensure the initial state is reflected
        audioSwitch.dispatchEvent(new Event('change'));
    }

    const audio = new Audio('audio/bubbles-14830.mp3');
    audio.loop = true;

    // Function to toggle audio on and off
    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});
