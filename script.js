// Change text content dynamically
document.getElementById('change-text').addEventListener('click', function() {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'Hello PLP friends!';
});

// Modify CSS styles via JavaScript
document.getElementById('change-style').addEventListener('click', function() {
    const styleElement = document.getElementById('dynamic-style');
    styleElement.style.color = 'blue';
    styleElement.style.fontSize = '24px';
    styleElement.style.fontWeight = 'bold';
});

// Add or remove an element when a button is clicked
document.getElementById('add-element').addEventListener('click', function() {
    const container = document.getElementById('dynamic-elements');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a great opportunity to learn.';
    container.appendChild(newElement);
});

document.getElementById('remove-element').addEventListener('click', function() {
    const container = document.getElementById('dynamic-elements');
    if (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
});