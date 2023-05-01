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

    /*
    gridContainer.addEventListener("click", (e) => {
        const marker = document.createElement('p');
        marker.textContent = 'X';

        console.log(e.target.textContent)
        e.target.appendChild(marker);
    })*/
}

const setupModal = () => {
    const myForm = document.getElementById('modalForm');

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const player1Name = document.getElementById('name1').value;
        const player2Name = document.getElementById('name2').value;
        console.log(player1Name);
        console.log(player2Name);
    })
}
export { generateUI }