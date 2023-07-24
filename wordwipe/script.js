
        // Add your JavaScript code here
        const words = ['AB','AC','AD','AF','AG','AI','AH','AJ','AO','AK','AL','AM','AN','AO','AP','WORD', 'WIPE', 'GAME', 'HTML5', 'CSS3', 'JAVASCRIPT', 'ONCLICK', 'MATCH', 'ARRAY'];
        let selectedWord = '';
        let isMouseDown = false;

        function generateGrid() {
            const grid = document.getElementById('grid');

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.dataset.row = i;
                    cell.dataset.col = j;
                    cell.textContent = randomLetter();
                    grid.appendChild(cell);
                }
            }
        }

        function randomLetter() {
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        function checkWordMatch() {
            const foundIndex = words.indexOf(selectedWord);
            if (foundIndex !== -1) {
                const wordCells = document.querySelectorAll('.cell.selected');
                wordCells.forEach(cell => cell.classList.add('matched'));
                alert(`Match: ${selectedWord}`);
            }
            selectedWord = '';
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
            if (!target.classList.contains('cell')) return;
            if (!target.classList.contains('selected')) {
                target.classList.add('selected');
                const letter = target.textContent;
                selectedWord += letter;
            }
        }

        function clearSelection() {
            const selectedCells = document.querySelectorAll('.cell.selected');
            selectedCells.forEach(cell => cell.classList.remove('selected'));
        }

        const grid = document.getElementById('grid');
        generateGrid();

        grid.addEventListener('mousedown', handleCellMouseDown);
        grid.addEventListener('mouseover', handleCellMouseOver);
        document.addEventListener('mouseup', handleCellMouseUp);
  