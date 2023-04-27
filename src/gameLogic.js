import { gameboard } from "./Gameboard";
import { player } from "./players";

const playGame = () => {
    const board = gameboard();

    /*
    const player1Name = prompt('Please enter your name: ');
    const player1Marker = prompt('Please select either "X" or "O"');
    const player1 = player(player1Name, player1Marker);

    const player2Name = prompt('Please enter your name: ');
    const player2Marker = prompt('Please select either "X" or "O"');
    const player2 = player(player2Name, player2Marker);*/

    const player1 = getPlayer();
    const player2 = getPlayer();


    let playerTurn = player1;
    for (let i = 0; i < 9; i++) {
        const pos = JSON.parse(prompt('enter'));

        board.placeMarker(playerTurn, pos);

        if (playerTurn == player1) playerTurn = player2
        else if (playerTurn == player2) playerTurn = player1

        console.log(board.board);
        
    }
}

function getPlayer() {
    const name = prompt('Enter your name: ');
    const marker = prompt('Enter your marker: X or O').toUpperCase();

    return player(name, marker)
}


export { playGame }