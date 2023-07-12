// Your Code Here.
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

let currentPlayer = 1
let numberOfDiscsPlayed = 0

let renderBoard = function (columnNum) {
  let gameDiv = document.querySelector(".game")
  for (let i = 0; i < columnNum.length; i += 1) {
    let column = document.createElement("li")
    column.id = i
    gameDiv.append(column)
    let columnArray = board[i]
    for (let j = 0; j < columnArray.length; j += 1) {
      let gameSlot = document.createElement("div")
      let slotArray = columnArray[j]
      if ((slotArray = 1)) {
        gameSlot.classList.add("playerBlack")
      } else if ((slotArray = 2)) {
        gameSlot.classList.add("playerRed")
      } else {
        gameSlot.classList.add("emptySpace")
      }
      column.append(gameSlot)
    }
  }
  setUpClickHandlers()
  checkForGameOver(board)
}

let columnFull = function (columnArray) {
  if (columnArray.includes(0) === true) {
    return false
  } else {
    return true
  }
}
let messageBox = document.querySelector(".messageBox");
let gameDiv = document.querySelector(".game");
let tableGrid = document.querySelector(".game.div");


let dropDisc = function (columnNum, columnIndex) {
  let black = 1
  let red = 2
  let currentDisc = black
  let columnArray = columnNum[columnIndex]
  let player = turnTracker(numberOfDiscsPlayed)
  if (columnFull(columnArray) === true || gameWon(columnNum) === true) {
    return
  } else {
    if (player === "red") {
      currentDisc = red
    }
    for (let i = 6; i >= 0; i -= 1) {
      if (columnArray[i] === 0) {
        columnArray[i] = currentDisc
        numberOfDiscsPlayed += 1
        renderBoard(columnNum)
        return
      }
    }
  }
}
let displayMessage = function (message) {
  message = document.getElementById(".messageBox")
};

console.table(board)
let whoIsTheWinner = function (boardModel) {
  //check for 4 in a row
  //return the player number who won, or null
}
let gameWon= function(winner, tieGame) {}
let isGameATie = function (boardModel) {
  //returns a boolean
}

let nextPlayer = function () {
  if (currentPlayer === 1){
    currentPlayer = 2
    displayMessage(`Player ${currentPlayer} it's your turn`)
  }else if (currentPlayer === 2){
    currentPlayer = 1
    displayMessage(`Player ${currentPlayer} it's your turn`)
  }
}

let gameOver = function() {

}

let checkForGameOver = function (boardModel) {
  //look at the board variable to find 4-in a row
  let winner = whoIsTheWinner(boardModel)
  let tieGame = isGameATie(boardModel)
  if (winner !== null || tieGame) {
    gameWon(winner, tieGame)
  } else {
    nextPlayer()
  }
};
let dropDisc = (countStart, cellValue) => {
  let tableRow = document.querySelectorAll(".tableRow");
  let gameCell = document.querySelectorAll(".gameCell");
  if (board[countStart][cellValue] !== 0) {
    numberOfDiscsPlayed = numberOfDiscsPlayed += 1;
    dropDisc(countStart, cellValue);
  } else {
    let currentRow = tableRow[countStart].gameCell;
    currentRow[cellValue].classList.add("occupied", `player${currentPlayer}`);
    board[countStart][cellValue] = currentPlayer;
    if (whoIsTheWinner(countStart, cellValue)) {
      message.innerHTML = `Player <span> ${currentPlayer}</span> wins!`;
      return false;
    }
  }
  checkForGameOver();
};
console.table(board);

let setUpClickHandlers = function () {
let col1 = document.querySelector("column1")
col1.addEventListener("click", function(){
  dropDisc(1)
})

let col2 = document.querySelector("column2")
col2.addEventListener("click", function(){
  dropDisc(2)
})

let col3 = document.querySelector("column3")
col3.addEventListener("click", function(){
  dropDisc(3)
})

let col4 = document.querySelector("column4")
col4.addEventListener("click", function(){
  dropDisc(4)
})

let col5 = document.querySelector("column5")
col5.addEventListener("click", function(){
  dropDisc(5)
})

let col6 = document.querySelector("column6")
col6.addEventListener("click", function(){
  dropDisc(6)
})
}

let turnTracker = function (turnNumber) {
  let player = "black"
  if (turnNumber % 2 !== 0) {
    player = "red"
  }
  return player
}

let displayMessage = function (message) {
  //Show message in the message box on the DOM
}

let setUpClickHandlers = function () {
  let col1 = document.getElementById("column1")
  col1.addEventListener("click", function () {
    dropDisc(board, 1)
  })
    let col2 = document.getElementById("column2")
    col2.addEventListener("click", function () {
      dropDisc(board, 2)
    })
    let col3 = document.getElementById("column3")
    col3.addEventListener("click", function () {
      dropDisc(board, 3)
    })
    let col4 = document.getElementById("column4")
    col4.addEventListener("click", function () {
      dropDisc(board, 4)
    })
    let col5 = document.getElementById("column5")
    col5.addEventListener("click", function () {
      dropDisc(board, 5)
    })
    let col6 = document.getElementById("column6")
    col6.addEventListener("click", function () {
      dropDisc(board, 6)
    })
    let col7 = document.getElementById("column7")
    col7.addEventListener("click", function () {
      dropDisc(board, 7)
    })
  }
let col7 = document.querySelector("column7")
col7.addEventListener("click", function(){
  dropDisc(7)
})
};

let initializeGame = function () {
  //initialize various variables
  setUpClickHandlers()
}

initializeGame()

let startButton = document.createElement("button");
startButton.innerHTML = "Start";
messageBox.append(startButton);
startButton.addEventListener("click", function () {
  displayMessage(`Player ${currentPlayer} start`);
});

let testBoard1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0],
]

let testBoard2 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 1, 1, 2, 1, 0, 0],
]

let testBoard3 = [
  [0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]
