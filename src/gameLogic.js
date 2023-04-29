import { gameboard } from "./Gameboard";
import { player } from "./players";

const playGame = () => {
    const board = gameboard();


    const player1 = getPlayer();
    const player2 = getPlayer();

    let playerTurn = player1;
    let winner = '';


    for (let i = 0; i < 9; i++) {

        const pos = JSON.parse(prompt(`${playerTurn.name} please enter a position`));

        playRound(board, playerTurn, pos);

        if (checkWinner(playerTurn)) {
            winner = playerTurn.name;
            console.log(`${board.board[0]} \n ${board.board[1]} \n ${board.board[2]}`)
            break
        }

        if (playerTurn == player1) {
            playerTurn = player2
        } else {
            playerTurn = player1
        }

        console.log(`${board.board[0]} \n ${board.board[1]} \n ${board.board[2]}`)
    }

    if (winner == '') {
        console.log('Game over! Draw!')
    } else {
        printWinner(winner);
    }

    //printWinner(winner);
}

function getPlayer() {
    const name = prompt('Enter your name: ');
    const marker = prompt('Enter your marker: X or O').toUpperCase();

    return player(name, marker)
}

function playRound(board, player, position) {
    board.placeMarker(player, position)
}


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

function printWinner(winner) {
    console.log(`Game over! ${winner} wins!`)
}


export { playGame, checkWinner, printWinner }