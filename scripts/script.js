const timerOneSeconds = 4;
let timeOne = timerOneSeconds;

const countdownEl = document.getElementById("first");
setInterval(updateCountdown, 1000);

function updateCountdown() {

    
    if (timeOne >= 0) {
        // const minutes = Math.floor(time / 60);
        let seconds = timeOne % 60;
        countdownEl.innerHTML = `Breathe in: ${seconds}`;
        timeOne--;
    }
}