function startCountdown() {
    let countdownValue = localStorage.getItem('countdown');
    if (countdownValue === null) {
        countdownValue = "5d 04h 18m 4s";
    }

    let timeParts = countdownValue.split(' ');
    let totalSeconds = 0;
    totalSeconds += parseInt(timeParts[0]) * 24 * 60 * 60;
    totalSeconds += parseInt(timeParts[1]) * 60 * 60;
    totalSeconds += parseInt(timeParts[2]) * 60;
    totalSeconds += parseInt(timeParts[3]);

    updateCountdown(totalSeconds);

    setInterval(function() {
        totalSeconds--;
        updateCountdown(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval();
        }
    }, 1000);
}

function updateCountdown(totalSeconds) {

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    localStorage.setItem('countdown', `${days}d ${hours}h ${minutes}m ${seconds}s`);
}

startCountdown();













function startCountdownNew() {
    let countdownValue = localStorage.getItem('countdownnew');
    if (countdownValue === null) {
        countdownValue = "10d 23h 24m 10s";
    }

    let timeParts = countdownValue.split(' ');
    let totalSeconds = 0;
    totalSeconds += parseInt(timeParts[0]) * 24 * 60 * 60;
    totalSeconds += parseInt(timeParts[1]) * 60 * 60;
    totalSeconds += parseInt(timeParts[2]) * 60;
    totalSeconds += parseInt(timeParts[3]);

    updateCountdownNew(totalSeconds);

    setInterval(function() {
        totalSeconds--;
        updateCountdownNew(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval();
        }
    }, 1000);
}

function updateCountdownNew(totalSeconds) {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    const countdownElement = document.getElementById('countdownnew');
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    localStorage.setItem('countdown', `${days}d ${hours}h ${minutes}m ${seconds}s`);
}

startCountdownNew();