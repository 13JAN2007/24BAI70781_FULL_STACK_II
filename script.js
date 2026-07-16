let elapsed = 0;
let running = true;

const timer = document.getElementById("timer");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = Date.now();

function updateTimer() {
    if (running) {
        elapsed = Date.now() - startTime;
    }

    let ms = elapsed % 1000;
    let totalSeconds = Math.floor(elapsed / 1000);

    let seconds = totalSeconds % 60;
    let totalMinutes = Math.floor(totalSeconds / 60);

    let minutes = totalMinutes % 60;
    let totalHours = Math.floor(totalMinutes / 60);

    let hours = totalHours % 24;
    let days = Math.floor(totalHours / 24);

    timer.textContent =
        `${String(days).padStart(2, '0')} : ` +
        `${String(hours).padStart(2, '0')} : ` +
        `${String(minutes).padStart(2, '0')} : ` +
        `${String(seconds).padStart(2, '0')} : ` +
        `${String(ms).padStart(3, '0')}`;
}

setInterval(updateTimer, 10);

pauseBtn.addEventListener("click", () => {
    if (running) {
        running = false;
        pauseBtn.textContent = "Resume";
    } else {
        running = true;
        startTime = Date.now() - elapsed;
        pauseBtn.textContent = "Pause";
    }
});

resetBtn.addEventListener("click", () => {
    elapsed = 0;
    startTime = Date.now();
    running = true;
    pauseBtn.textContent = "Pause";
    updateTimer();
});