// Get the button element
var colorChangingButton = document.getElementById("change-color");
// Add click event listener to the button
colorChangingButton.addEventListener("click", function () {
  // Get a random color
  var randomColor = getRandomColor();
  // Change the background color of the hero element
  document.getElementById("hero").style.backgroundColor = randomColor.colorCode;
  // Update the content of the show-the-color-name div with the generated color code and name
  document.getElementById("show-the-color-name").innerText =
    randomColor.colorCode + " " + randomColor.colorName;
});

// Function to generate a random color and its name
function getRandomColor() {
  var letters = "0123456789ABCDEF"; // This string contains all the characters that can be used in a hexadecimal color code.
  var colorCode = "#"; // This initializes the color variable with the '#' symbol, which is used in hexadecimal color codes.
  var colorName = ""; // Variable to store the color name
  for (var i = 0; i < 6; i++) {
    // This loop runs 6 times to generate a 6-character hexadecimal color code.
    colorCode += letters[Math.floor(Math.random() * 16)]; // In each iteration, a random character from the 'letters' string is added to the 'color' variable.
    // Math.random() generates a random number between 0 and 1. Multiplying it by 16 gives us a number between 0 and 15.
    // Math.floor() rounds down the result to the nearest integer, ensuring it's within the range of valid indices for the 'letters' string.
    // This expression selects a random character from the 'letters' string and adds it to the 'color' variable.
  }
  // Color names can be assigned based on the color code or chosen arbitrarily
  // For simplicity, let's assign some color names based on the generated color code
  switch (colorCode) {
    case "#FF0000":
      colorName = "Red";
      break;
    case "#00FF00":
      colorName = "Green";
      break;
    case "#0000FF":
      colorName = "Blue";
      break;
    // Add more cases as needed
    default:
      colorName = "";
  }
  // Finally, the generated hexadecimal color code and its name are returned.
  return { colorCode: colorCode, colorName: colorName };
}
