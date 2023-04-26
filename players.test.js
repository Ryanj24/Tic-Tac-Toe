import { player } from "./src/players.js";

test('Correctly creates player object', () => {
    const player1 = player('Adam', 'X');

    expect(player1).toEqual({
        name: 'Adam',
        marker: 'X'
    })
});
