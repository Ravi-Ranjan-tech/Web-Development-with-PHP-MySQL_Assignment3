// DOM Elements
const greeting = document.getElementById('page-greeting') || document.getElementById('greeting');
const subtitle = document.getElementById('subtitle');
const nameInput = document.getElementById('name-input');
const greetForm = document.getElementById('greet-form');
const redBox = document.getElementById('red-box');
const blueBox = document.getElementById('blue-box');
const greenBox = document.getElementById('green-box');
const yellowBox = document.getElementById('yellow-box');

// Store the current user name
let userName = '';

// Initialize greeting from input value (if present)
if (nameInput && nameInput.value && nameInput.value.trim() !== '') {
  updateGreeting(nameInput.value.trim());
}

// Handle form submission for greeting
greetForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = nameInput.value.trim();
  
  if (name) {
    userName = name;
    updateGreeting(name);
    // keep the input value so it matches the screenshot
  }
});

// Update the greeting header with the user's name
function updateGreeting(name) {
  greeting.textContent = `Hello, ${name}`;
  subtitle.textContent = 'Welcome to the interactive color boxes!';
}

// Toggle color fill for a box
function toggleBoxColor(box) {
  box.classList.toggle('filled');
}

// Add click event listeners to all color boxes
redBox.addEventListener('click', function() {
  toggleBoxColor(redBox);
});

blueBox.addEventListener('click', function() {
  toggleBoxColor(blueBox);
});

greenBox.addEventListener('click', function() {
  toggleBoxColor(greenBox);
});

yellowBox.addEventListener('click', function() {
  toggleBoxColor(yellowBox);
});
