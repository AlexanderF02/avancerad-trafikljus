// Grab each light element by its ID
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

// Function to turn off all lights
function resetLights() {
  redLight.classList.remove('active');
  yellowLight.classList.remove('active');
  greenLight.classList.remove('active');
}

// Function to start the traffic light sequence
function startTrafficLight() {
  let currentLight = 'red'; // Start with the red light

  setInterval(() => {
    resetLights(); // Turn off all lights

    if (currentLight === 'red') {
      redLight.classList.add('active');
      currentLight = 'green'; // Next, change to green
    } else if (currentLight === 'green') {
      greenLight.classList.add('active');
      currentLight = 'yellow'; // Next, change to yellow
    } else if (currentLight === 'yellow') {
      yellowLight.classList.add('active');
      currentLight = 'red'; // Cycle back to red
    }
  }, 1000); // Change every 1 second (1000ms)
}

// Start the traffic light sequence when the page loads
window.onload = startTrafficLight;
