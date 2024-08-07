let timers = {};
let intervals = {};

function startTimer(timerId) {
    if (intervals[timerId]) {
        return; // Timer is already running
    }

    if (!timers[timerId]) {
        timers[timerId] = 0;
    }

    intervals[timerId] = setInterval(() => {
        timers[timerId]++;
        document.getElementById(timerId).textContent = formatTime(timers[timerId]);
    }, 1000);
}

function stopTimer(timerId) {
    clearInterval(intervals[timerId]);
    intervals[timerId] = null;
}

function resetTimer(timerId) {
    stopTimer(timerId);
    timers[timerId] = 0;
    document.getElementById(timerId).textContent = "00:00";
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
