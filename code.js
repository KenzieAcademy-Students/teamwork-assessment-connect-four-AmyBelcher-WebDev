// Your Code Here.
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let currentPlayer = 1;
let numberOfDiscsPlayed = 0;

let dropDisc = function (event) {
  //disc dropping code
  checkForGameOver(board);
};

let whoIsTheWinner = function (boardModel) {
  //check for 4 in a row
  //return the player number who won, or null
};

let isGameATie = function (boardModel) {
  //returns a boolean
};

let nextPlayer = function () {};

let checkForGameOver = function (boardModel) {
  //look at the board variable to find 4-in a row
  let winner = whoIsTheWinner(boardModel);
  let tieGame = isGameATie(boardModel);
  if (winner !== null || tieGame) {
    gameOver(winner, tieGame);
  } else {
    nextPlayer();
  }
};

let displayMessage = function (message) {
  //Show message in the message box on the DOM
};

let setUpClickHandlers = function () {};

let initializeGame = function () {
  //initialize various variables
  setUpClickHandlers();
};

initializeGame();


let startButton = document.createElement("button");
startButton.innerHTML = "Start";
document.body.append(startButton);
startButton.addEventListener("click", function(){
  alert(`Player ${currentPlayer} start`)
})



let testBoard1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0],
];

let testBoard2 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 1, 1, 2, 1, 0, 0],
];

let testBoard3 = [
  [0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
