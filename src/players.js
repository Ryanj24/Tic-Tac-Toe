import { createGrid } from "./Gameboard"

const player = (name, marker) => {
    return {
        name: name,
        marker: marker,
        // New
        board: createGrid()
    }
}

export { player }