import { gameboard } from "./src/Gameboard";
import { player } from "./src/players";
import { createGrid } from "./src/Gameboard";
import { validPosition } from "./src/Gameboard";

test('Creates 3x3 empty grid', () => {

    expect(createGrid()).toEqual(
        [['', '', ''], ['', '', ''], ['', '', '']]
    )
})

describe('Check to ensure valid positions are entered', () => {

    test('Position [0, 0]', () => {

        expect(validPosition([0, 0])).toBe(true)
            
    })

    test('Position [1, 0]', () => {

        expect(validPosition([1, 0])).toBe(true)
            
    })

    test('Position [0, 2]', () => {

        expect(validPosition([0, 2])).toBe(true)
            
    })

    test('Position [2, 3]', () => {

        expect(validPosition([2, 3])).toBe(false)
            
    })

    test('Position [-1, 2]', () => {

        expect(validPosition([-1, 2])).toBe(false)
            
    })
});

describe('Place marker on board if valid position entered', () => {

    const board = gameboard();
    const player1 = player('Adam', 'X');

    test('Adam selects position [0, 1]', () => {

        board.placeMarker(player1, [0, 1]);

        expect(board.board).toEqual([['', 'X', ''], ['', '', ''], ['', '', '']])
            
    })

    test('Adam selects position [2, 1]', () => {
        
        board.placeMarker(player1, [2, 1]);

        expect(board.board).toEqual([['', 'X', ''], ['', '', ''], ['', 'X', '']])
            
    })

    test('Adam selects invalid position [3, 0]', () => {
        
        board.placeMarker(player1, [3, 0]);
        
        expect(board.board).toEqual([['', 'X', ''], ['', '', ''], ['', 'X', '']])
            
    })

    test('Adam selects invalid position [-1, 2]', () => {
        
        board.placeMarker(player1, [-1, 2]);
        
        expect(board.board).toEqual([['', 'X', ''], ['', '', ''], ['', 'X', '']])
            
    })
})
