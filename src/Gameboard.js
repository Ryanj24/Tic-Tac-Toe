import { player } from "./players";

const gameboard = () => {
    
    // Create board array
    let board =  createGrid();

    return {
        board
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


export { gameboard, createGrid }