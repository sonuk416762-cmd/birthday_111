// Countdown Timer Configuration
const COUNTDOWN_START = 5; // Start counting from 5
let countdownValue = COUNTDOWN_START;

// Wait for DOM to be ready
$(document).ready(function() {
    startCountdown();
});

function startCountdown() {
    const countdownDisplay = $('#countdown-display');
    const countdownPage = $('#countdown-page');
    const birthdayContent = $('#birthday-content');
    
    // Update countdown every second
    const countdownInterval = setInterval(function() {
        countdownValue--;
        
        if (countdownValue > 0) {
            // Update the display with animation
            countdownDisplay.text(countdownValue);
            countdownDisplay.css('animation', 'none');
            
            // Trigger reflow to restart animation
            setTimeout(function() {
                countdownDisplay.css('animation', 'countdownPulse 1s ease');
            }, 10);
            
            // Add sound effect (optional - uncomment if you have a tick sound)
            // playTickSound();
            
        } else if (countdownValue === 0) {
            // Show zero
            countdownDisplay.text('0');
            
            // Wait a moment, then transition
            setTimeout(function() {
                // Fade out countdown page
                countdownPage.addClass('fade-out');
                
                // After fade out, show birthday content
                setTimeout(function() {
                    countdownPage.hide();
                    birthdayContent.fadeIn(1000);
                    
                    // Initialize birthday effects after content is visible
                    initBirthdayEffects();
                    
                    // Auto-play music (optional)
                    // playBirthdayMusic();
                }, 1000);
            }, 500);
            
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function initBirthdayEffects() {
    // Add confetti effect
    createConfetti();
    
    // Animate balloons
    animateBalloons();
    
    // Add any other effects from the original effect.js
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
    const confettiContainer = $('.confetti');
    
    for (let i = 0; i < 50; i++) {
        const confetti = $('<div></div>');
        confetti.css({
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            top: '-10px',
            left: Math.random() * 100 + '%',
            opacity: Math.random(),
            transform: 'rotate(' + Math.random() * 360 + 'deg)',
            animation: 'confettiFall ' + (Math.random() * 3 + 2) + 's linear infinite',
            animationDelay: Math.random() * 2 + 's'
        });
        confettiContainer.append(confetti);
    }
}

function animateBalloons() {
    $('.balloon div').each(function(index) {
        $(this).css({
            animationDelay: (index * 0.2) + 's'
        });
    });
}

function playBirthdayMusic() {
    const audio = $('#birthday-song')[0];
    if (audio) {
        audio.play().catch(function(error) {
            console.log('Auto-play prevented. User interaction required.');
        });
    }
}

// Music control
$('#playButton').click(function() {
    const audio = $('#birthday-song')[0];
    if (audio.paused) {
        audio.play();
        $(this).text('⏸️ Pause Music');
    } else {
        audio.pause();
        $(this).text('🎵 Play Music');
    }
});

// Add confetti fall animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);