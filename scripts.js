// mouse events 
document.getElementById('hover-btn').addEventListener('mouseover', () => {
    document.getElementById('mouse-message').textContent = "Mouse is hovering!";
});
document.getElementById('hover-btn').addEventListener('mouseout', () => {
    document.getElementById('mouse-message').textContent = "Mouse left!";
});

// keyboard events
document.getElementById('key-input').addEventListener('keydown', (event) => {
    document.getElementById('key-message').textContent = `You pressed: ${event.key}`;
});

// Form Events
document.getElementById('sample-form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('form-message').textContent = "Form submitted!";
});