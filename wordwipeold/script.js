// Add your JavaScript code here
// Implement the game logic and functionality

const words = ["apple", "banana", "orange", "grape", "pear"];
const gridSize = 8; // Adjust this to change the grid size

// Function to generate a random letter
function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Function to generate the game grid with random letters
function generateGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = ""; // Clear previous grid if any

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = getRandomLetter();
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

// Function to hide words in the grid
function hideWords() {
    // Implementation to hide words in the grid
    // You can randomly place the words horizontally, vertically, or diagonally
}

// Function to handle user interaction and word selection
function handleWordSelection() {
    // Implementation to handle user interaction and word selection
    // Detect when the user selects a word and check if it's a correct word
}

// Call the functions to start the game
generateGrid();
hideWords();

// Add event listener for user interaction
document.getElementById("grid").addEventListener("mouseup", handleWordSelection);
