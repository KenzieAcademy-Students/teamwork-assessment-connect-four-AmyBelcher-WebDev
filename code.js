// Your Code Here.
let gameArray= [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
];

let currentPlayer;

function addRandomTile() {
//players turn
}

function checkIfGameHasEnded() {
    return false
}

function resetBoard() {
//deletes old DOM and renders new DOM 
}

function renderBoard(){

    
}

function afterMove() {
    if (checkIfGameHasEnded()) {
        alert ("Game Over!")
    } else {
        renderBoard();
        }
}

function startGame() {
    resetBoard();
    addRandomTile();
    addRandomTile();
    renderBoard();
}
startGame();