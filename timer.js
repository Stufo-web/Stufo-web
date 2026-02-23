let countdown;
let totalSeconds = 0;
let remainingSeconds = 0;
let isRunning = false;

const display = document.getElementById("display");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;

    const input = document.getElementById("minutesInput").value;

    if (remainingSeconds === 0) {
        if (!input || input <= 0) {
            alert("Enter valid minutes.");
            return;
        }
        totalSeconds = input * 60;
        remainingSeconds = totalSeconds;
    }

    isRunning = true;

    countdown = setInterval(() => {
        if (remainingSeconds > 0) {
            remainingSeconds--;
            display.textContent = formatTime(remainingSeconds);
        } else {
            clearInterval(countdown);
            isRunning = false;
            alert("Time's up! 🔥");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    remainingSeconds = 0;
    display.textContent = "00:00";
    document.getElementById("minutesInput").value = "";
}

