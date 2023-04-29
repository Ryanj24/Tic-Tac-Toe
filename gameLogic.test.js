import { checkWinner } from "./src/gameLogic";
import { player } from "./src/players";
import { printWinner } from "./src/gameLogic";

describe('Check different possible winning scenarios', () => {

    const player1 = player('Adam', 'X');
    player1.board[0][0] = player1.marker;
    player1.board[0][1] = player1.marker;
    player1.board[0][2] = player1.marker;

    const player2 = player('Jane', 'O');
    player2.board[0][1] = player2.marker;
    player2.board[2][2] = player2.marker;
    player2.board[2][1] = player2.marker;

    const player3 = player('Richard', 'X');
    player3.board[0][1] = player3.marker;
    player3.board[1][1] = player3.marker;
    player3.board[2][1] = player3.marker;

    const player4 = player('Betty', 'O');
    player4.board[0][2] = player4.marker;
    player4.board[1][1] = player4.marker;
    player4.board[2][0] = player4.marker;


    test('Check if Adam won having filled the top row', () => {

        expect(checkWinner(player1)).toBe(true)
            
    })

    test('Check that Jane is not a winner', () => {

        expect(checkWinner(player2)).toBe(false)
            
    })

    test('Check that Richard has won after filling the middle column', () => {

        expect(checkWinner(player3)).toBe(true)
            
    })

    test('Check that Betty has won after filling the reverse diagonal', () => {

        expect(checkWinner(player4)).toBe(true)
            
    })

});

describe('Check that winner is being correctly returned', () => {

    test('Check if Adam won', () => {

        expect(printWinner('Adam')).toEqual(`Game over! Adam wins!`)
            
    })


});