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


    /*
    for (let i = 0; i < 9; i++) {
        const pos = JSON.parse(prompt(`${playerTurn.name} please enter a position`));

        playRound(board, playerTurn, pos);

        if (playerTurn == player1) {
            playerTurn = player2
        } else if (playerTurn == player2) {
            playerTurn = player1
        }

        console.log(`${board.board[0]} \n ${board.board[1]} \n ${board.board[2]}`);
        
    }*/

    //console.log(`${board.board[0]} \n ${board.board[1]} \n ${board.board[2]}`);
    //console.log(player1.board);
    //console.log(player2.board);

    let i = 0;
    while (!checkWinner(playerTurn) && i < 9) {
        const pos = JSON.parse(prompt(`${playerTurn.name} please enter a position`));

        playRound(board, playerTurn, pos);

        if (playerTurn == player1) {
            playerTurn = player2
        } else if (playerTurn == player2) {
            playerTurn = player1
        }

        console.log(`${board.board[0]} \n ${board.board[1]} \n ${board.board[2]}`);
        i++
    }
}

function getPlayer() {
    const name = prompt('Enter your name: ');
    const marker = prompt('Enter your marker: X or O').toUpperCase();

    return player(name, marker)
}

function playRound(board, player, position) {
    board.placeMarker(player, position)
}

// Correctly checks all the lines
function checkWinner(player) {
    const winCombos = [
    [player.board[0][0], player.board[0][1], player.board[0][2]],
    [player.board[1][0], player.board[1][1], player.board[1][2]],
    [player.board[2][0], player.board[2][1], player.board[2][2]],
    [player.board[0][0], player.board[1][0], player.board[2][0]],
    [player.board[0][1], player.board[1][1], player.board[2][1]],
    [player.board[0][2], player.board[1][2], player.board[2][2]],
    [player.board[0][0], player.board[1][1], player.board[2][2]],
    [player.board[0][2], player.board[1][1], player.board[2][0]],
]
    for (let i = 0; i < winCombos.length; i++) {
        if (winCombos[i].toString() == [player.marker, player.marker, player.marker].toString()) {
            return true
        }
    }
    return false
}




export { playGame, checkWinner }