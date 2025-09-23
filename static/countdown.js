let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);

  const input = document.getElementById("targetTime").value;
  const targetDate = new Date(input);

  if (isNaN(targetDate)) {
    alert("Please select a valid date and time.");
    return;
  }

  function updateCountdown() {
    const now = new Date();
    let diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").textContent = "Time's up!";
      document.querySelector(".totals").textContent = "";
      return;
    }

    // Breakdown
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 7;
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) % 52;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    // Totals
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(diff / (1000 * 60));
    const totalHours = Math.floor(diff / (1000 * 60 * 60));

    // Main countdown
    document.getElementById("years").textContent = years;
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

    // Totals with separators
    document.getElementById("totalHours").textContent = totalHours.toLocaleString();
    document.getElementById("totalMinutes").textContent = totalMinutes.toLocaleString();
    document.getElementById("totalSeconds").textContent = totalSeconds.toLocaleString();
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}
