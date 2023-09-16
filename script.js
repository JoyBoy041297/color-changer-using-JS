// Select the button element by its ID
const colorButton = document.getElementById('colorButton');

// Function to change the background color
function changeBackgroundColor() {
    // Generate a random color code
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Set the body's background color to the random color
    document.body.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
colorButton.addEventListener('click', changeBackgroundColor);