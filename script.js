// Set the target date (January 1, 2025)
const targetDate = new Date("December 31, 2025 11:59:00").getTime();

// Update the countdown every second
const timer = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate time remaining
    const timeRemaining = targetDate - now;
    
    // If countdown is finished
    if (timeRemaining < 0) {
        clearInterval(timer);
        document.getElementById("message").style.display = "block";
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;
    }
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Display the values with animation
    animateNumber("days", days);
    animateNumber("hours", hours);
    animateNumber("minutes", minutes);
    animateNumber("seconds", seconds);
}, 1000);

// Function to animate number changes
function animateNumber(id, value) {
    const element = document.getElementById(id);
    const currentValue = parseInt(element.textContent);
    
    if (currentValue !== value) {
        element.style.animation = "none";
        void element.offsetWidth; // Trigger reflow
        element.style.animation = "pulse 1s infinite alternate";
        element.textContent = value.toString().padStart(2, "0");
    }
}