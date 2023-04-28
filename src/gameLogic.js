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

    while (!checkWinner(player1.board)) {
        const pos = JSON.parse(prompt(`${playerTurn.name} please enter a position`));

        playRound(board, playerTurn, pos);

        if (playerTurn == player1) {
            playerTurn = player2
        } else if (playerTurn == player2) {
            playerTurn = player1
        }

        console.log(`${board.board[0]} \n ${board.board[1]} \n ${board.board[2]}`);
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

function checkWinner(player1Board, player2Board) {
    
    const winCombos = [
        [[0][0], [0][1], [0][2]],
        [[1][0], [1][1], [1][2]],
        [[2][0], [2][1], [2][2]],
        [[0][0], [1][0], [2][0]],
        [[0][1], [1][1], [2][1]],
        [[0][2], [1][2], [2][2]],
        [[0][0], [1][1], [2][2]],
        [[0][2], [1][1], [2][0]]
    ]
    /*
    const winCombos = [
        [[[0][0]], [[0][1]], [[0][2]]],
        [[[1][0]], [[1][1]], [[1][2]]],
        [[[2][0]], [[2][1]], [[2][2]]],
        [[[0][0]], [[1][0]], [[2][0]]],
        [[[0][1]], [[1][1]], [[2][1]]],
        [[[0][2]], [[1][2]], [[2][2]]],
        [[[0][0]], [[1][1]], [[2][2]]],
        [[[0][2]], [[1][1]], [[2][0]]]
    ]*/

    if (player1Board[winCombos[0][0]][0] == 'X' && player1Board[winCombos[0][0]][1] == 'X' && player1Board[winCombos[0][0]][2] == 'X') {
        return true
    } else {
        return false
    }

    /*
    for (let i = 0; i < winCombos.length; i++) {
        if (player1Board[winCombos[i][0][0]] == 'X' && player1Board[winCombos[i][0][1]] == 'X' && player1Board[winCombos[i][0][1]] == 'X') {
            return true
        }
    }*/

}



export { playGame }