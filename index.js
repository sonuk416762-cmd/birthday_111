const TARGET_DATE = new Date('2026-01-22T12:55:00').getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('message');
const countdownContainer = document.getElementById('countdown-container');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = TARGET_DATE - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        redirectToBirthday();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    if (days === 0 && hours === 0 && minutes === 0 && seconds <= 10) {
        messageEl.textContent = 'Get ready...';
    }
}

function redirectToBirthday() {
    messageEl.textContent = "It's Time! 🎉";
    
    setTimeout(() => {
        countdownContainer.classList.add('fade-out');
        
        setTimeout(() => {
            window.location.href = 'index_1.html';
        }, 1500);
    }, 1000);
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();