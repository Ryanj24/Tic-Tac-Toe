import { player } from "./players";

const gameboard = () => {
    
    // Create board array
    let board =  createGrid();

    return {
        board,

        // Method to place player marker in a valid position on the board
        placeMarker(player, position) {
            if (validPosition(position) && this.board[position[0]][position[1]] != 'X' && this.board[position[0]][position[1]] != 'O') {
                this.board[position[0]][position[1]] = player.marker
                // New
                player.board[position[0]][position[1]] = player.marker
            }
        }
    }
}

// Function to create 3x3 grid
function createGrid() {
    let grid = [];

    for (let i = 0; i < 3; i++) {
        grid[i] = [];
        for (let j = 0; j < 3; j++) {
            grid[i][j] = '';
        }
    }
    return grid
}

function validPosition(position) {
    const board = gameboard().board;

    if (position[0] < 0 || position[0] > 2 || position[1] < 0 || position[1] > 2) {
        return false
    }

    return true
}


export { gameboard, createGrid, validPosition }