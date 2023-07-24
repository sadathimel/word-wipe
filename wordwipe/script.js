



      // Add your JavaScript code here
      // const words = [
      //   "A",
      //   "WORD",
      //   "WIPE",
      //   "GAME",
      //   "HTML5",
      //   "CSS3",
      //   "JAVASCRIPT",
      //   "ONCLICK",
      //   "MATCH",
      //   "ARRAY",
      // ];

      function generateGrid() {
        const grid = document.getElementById("grid");

        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.textContent = randomLetter();
            grid.appendChild(cell);
          }
        }
      }

      function randomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      }

      let selectedWord = "";
      let selectedCells = [];

      function checkWordMatch() {
        if (words.includes(selectedWord.toLowerCase())) {
          const matchedCells = selectedCells.slice(); // Create a copy of the selectedCells array
          matchedCells.forEach((cell) => cell.classList.add("matched"));
          // alert(`Match: ${selectedWord}`);
          // Remove the matched word from the grid
          setTimeout(() => {
            matchedCells.forEach((cell) => cell.remove());
          }, 1000);
        }
        selectedWord = "";
        selectedCells = [];
      }

      function handleCellMouseDown(event) {
        isMouseDown = true;
        selectCell(event);
      }

      function handleCellMouseOver(event) {
        if (isMouseDown) {
          selectCell(event);
        }
      }

      function handleCellMouseUp() {
        isMouseDown = false;
        checkWordMatch();
        clearSelection();
      }

      function selectCell(event) {
        const target = event.target;
        if (!target.classList.contains("cell")) return;
        if (!target.classList.contains("selected")) {
          target.classList.add("selected");
          const letter = target.textContent;
          selectedWord += letter;
          selectedCells.push(target);
        }
      }

      //   function selectCell(event) {
      //     const target = event.target;
      //     target.classList.add("selected");
      //     selectedWord += target.textContent;
      //     selectedCells.push(target);
      //   }

      function clearSelection() {
        const selectedCells = document.querySelectorAll(".selected");
        selectedCells.forEach((cell) => cell.classList.remove("selected"));
        selectedWord = "";
        selectedCells = [];
      }

      const grid = document.getElementById("grid");
      generateGrid();

      grid.addEventListener("mousedown", handleCellMouseDown);
      grid.addEventListener("mouseover", handleCellMouseOver);
      document.addEventListener("mouseup", handleCellMouseUp);

      grid.addEventListener("touchstart", handleCellMouseDown);
      grid.addEventListener("touchmove", handleCellMouseOver);
      document.addEventListener("touchend", handleCellMouseUp);