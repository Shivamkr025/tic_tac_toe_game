
        let currentPlayer = "X";
        let gameBoard = ["", "", "", "", "", "", "", "", ""];
        
        function BoxValue(button) {
            const BoxId = button.id;
            if (gameBoard[BoxId] === "" && currentPlayer === "X") {
                gameBoard[BoxId] = "X";
                button.textContent = "X";
                button.style.backgroundColor = "gray";
                button.style.color = "white";
                button.style.fontSize = "30px";
                currentPlayer = "O";
            } else if (gameBoard[BoxId] === "" && currentPlayer === "O") {
                gameBoard[BoxId] = "O";
                button.textContent = "O";
                button.style.backgroundColor = "gray";
                button.style.color = "white";
                button.style.fontSize = "30px";
                currentPlayer = "X";
            }
            if (checkWinner("X")) {
                alert("X win Game");
            } else if (checkWinner("O")) {
                alert("O win game");
            } else if (!gameBoard.includes("")) {
                alert("The match is Draw");
            }
        }
        
        function checkWinner(player) {
            const possiblePatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows combination
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns combination
                [0, 4, 8], [2, 4, 6] // Diagonals
            ];
        
            for (const pattern of possiblePatterns) {
                const a = pattern[0];
                const b = pattern[1];
                const c = pattern[2];
                if (gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === player) {
                    return true;
                }
            }
        
            return false;
        }
    