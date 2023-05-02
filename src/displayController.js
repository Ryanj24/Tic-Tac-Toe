import { player } from "./players";

const generateUI = () => {
    generateGrid();
    setupModal();
    playGame();
}

const generateGrid = () => {

    const gridContainer = document.querySelector('.main-grid');
    gridContainer.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        gridDiv.id = `grid-div${i+1}`

        gridContainer.appendChild(gridDiv);
    }

}

const setupModal = () => {
    const myForm = document.getElementById('modalForm');
    const player1markerBtns = document.querySelectorAll('.player1-markers')
    const player2markerBtns = document.querySelectorAll('.player2-markers')

    let player1marker = '', player2marker = '';

    const modalContainer = document.querySelector('.setup-modal-container');
    modalContainer.classList.add('active');


    player1markerBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            player1marker = btn.value;

            if (player1marker == 'X') {
                player1markerBtns[0].classList.add('active');
                player1markerBtns[1].classList.remove('active');
                player2markerBtns[0].disabled = true;
                player2markerBtns[1].disabled = false;
            } else if (player1marker == 'O') {
                player1markerBtns[1].classList.add('active');
                player1markerBtns[0].classList.remove('active');
                player2markerBtns[0].disabled = false;
                player2markerBtns[1].disabled = true;
            }
        })
    })

    player2markerBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            player2marker = btn.value;

            if (player2marker == 'X') {
                player2markerBtns[0].classList.add('active');
                player2markerBtns[1].classList.remove('active');
            } else if (player2marker == 'O') {
                player2markerBtns[1].classList.add('active');
                player2markerBtns[0].classList.remove('active');
            }
        })
    })

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        localStorage.setItem('player1-name', document.getElementById('name1').value);
        localStorage.setItem('player1-marker', player1marker);
        localStorage.setItem('player2-name', document.getElementById('name2').value);
        localStorage.setItem('player2-marker', player2marker);

        const modalContainer = document.querySelector('.setup-modal-container');
        modalContainer.classList.remove('active');
    })
}

const playGame = () => {
    // get players and their markers from local storage
    const player1 = player(localStorage.getItem('player1-name'), localStorage.getItem('player1-marker'));
    const player2 = player(localStorage.getItem('player2-name'), localStorage.getItem('player2-marker'));


    let playerTurn = player1;
    const playerTurnText = document.getElementById('player-turn');
    playerTurnText.textContent = `${playerTurn.name}'s Turn`;


    const gridContainer = document.querySelector('.main-grid');
    const gridDivs = document.querySelectorAll('.grid-div');

    let winner = '';
    let count = 0;
    gridContainer.addEventListener("click", (e) => {

        if (e.target.textContent == '') {
            if (playerTurn == player1) {

                e.target.textContent = player1.marker;
                
                if (checkWinner(gridDivs)) {
                    winner = player1.name;
                    endGame(winner);
                };

                count++;
                if (count == 9) {
                    endGame(winner);
                }

                
                playerTurn = player2;
                playerTurnText.textContent = `${playerTurn.name}'s Turn`;

            } else {
                
                e.target.textContent = player2.marker;
                
                if (checkWinner(gridDivs)) {
                    winner = player2.name;
                    endGame(winner);
                };

                count++;
                if (count == 9) {
                    endGame(winner);
                }

                
                playerTurn = player1;
                playerTurnText.textContent = `${playerTurn.name}'s Turn`;
            }
        }
    })

}

function checkWinner(divs) {
    const winCombos = [
        [divs[0].textContent, divs[1].textContent, divs[2].textContent],
        [divs[3].textContent, divs[4].textContent, divs[5].textContent],
        [divs[6].textContent, divs[7].textContent, divs[8].textContent],
        [divs[0].textContent, divs[3].textContent, divs[6].textContent],
        [divs[1].textContent, divs[4].textContent, divs[7].textContent],
        [divs[2].textContent, divs[5].textContent, divs[8].textContent],
        [divs[0].textContent, divs[4].textContent, divs[8].textContent],
        [divs[2].textContent, divs[4].textContent, divs[6].textContent]
    ]

    for (let i = 0; i < winCombos.length; i++) {
        if (winCombos[i].toString() == ['X', 'X', 'X'].toString() || winCombos[i].toString() == ['O', 'O', 'O'].toString()) {
            return true
        }
    }
    return false
}


const endGame = (winner) => {
    const endgameModal = document.querySelector('.endgame-modal-container');
    endgameModal.classList.add('active');

    const winnerText = document.getElementById('winner');

    if (winner == '') {
        winnerText.textContent = 'Draw!'
    } else {
        winnerText.textContent = `${winner} Wins!`;
    }
}

export { generateUI }