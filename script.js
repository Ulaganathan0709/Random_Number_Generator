// Enable Enter key to submit
window.onload = function () {
    document.getElementById("guessInput").addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        checkGuess();
      }
    });
  };

  // Firework animation
  function fireConfetti() {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
      }));
    }, 250);
  }

  // Main game logic
  function checkGuess() {
    const userGuess = document.getElementById("guessInput").value;
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (userGuess === "") {
      document.getElementById("result").textContent = "Please enter a number!";
    } else if (parseInt(userGuess) === randomNumber) {
      document.getElementById("result").textContent = "🎉 Correct! You guessed it!";
      fireConfetti();
    } else {
      document.getElementById("result").textContent = "❌ Wrong! The number was " + randomNumber;
    }
  }