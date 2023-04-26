import { gameboard } from "./src/Gameboard";
import { createGrid } from "./src/Gameboard";

test('Creates 3x3 empty grid', () => {

    expect(createGrid()).toEqual(
        [['', '', ''], ['', '', ''], ['', '', '']]
    )
})