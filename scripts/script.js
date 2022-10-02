function firstTimer() {
    const startingSeconds = 4;
    let time = startingSeconds;

    const countdownEl = document.getElementById("first");
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        if (time >= 0) {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            countdownEl.innerHTML = `${minutes}: ${seconds}`;
            time--;
        }
    }
}