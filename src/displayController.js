const generateUI = () => {
    generateGrid();
    setupModal();
}

const generateGrid = () => {

    const gridContainer = document.querySelector('.main-grid');

    for (let i = 0; i < 9; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        gridDiv.id = `grid-div${i+1}`

        gridContainer.appendChild(gridDiv);
    }

    
    gridContainer.addEventListener("click", (e) => {
        const marker = document.createElement('p');
        marker.textContent = 'X';

        console.log(e.target.textContent)
        e.target.appendChild(marker);
    })
}

const setupModal = () => {
    const myForm = document.getElementById('modalForm');
    const player1markerBtns = document.querySelectorAll('.player1-markers')
    const player2markerBtns = document.querySelectorAll('.player2-markers')

    let player1marker = '', player2marker = '';

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
export { generateUI }