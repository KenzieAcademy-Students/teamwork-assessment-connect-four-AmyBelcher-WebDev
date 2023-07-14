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

// let renderBoard = function (columnNum) {
//   let gameDiv = document.querySelector(".game")
//   for (let i = 0; i < columnNum.length + 1; i += 1) {
//     let column = document.createElement("li")
//     column.id = `column${i}`
//     gameDiv.append(column)
//     let columnArray = board[i]
//     for (let j = 0; j < columnArray.length + 1; j += 1) {
//       let gameSlot = document.createElement("div")
//       let columnArray = columnArray[j]
//       if ((columnArray = 1)) {
//         gameSlot.classList.add("playerBlack")
//       } else if ((columnArray = 2)) {
//         gameSlot.classList.add("playerRed")
//       } else {
//         gameSlot.classList.add("emptySpace")
//       }
//       column.append(gameSlot)
//     }
//   }

//   checkForGameOver(board)
// }

let columnFull = function (boardModel, columnIndex) {
  if (boardModel[0][columnIndex] === 0) {
    return false
  } else {
    return true
  }
}
let messageBox = document.querySelector(".messageBox");
let gameDiv = document.querySelector(".game");
let tableGrid = document.querySelector(".game.div");


let dropDisc = function (boardModel, columnIndex) {
  let yellow = 1
  let red = 2
  let currentDisc = yellow
  let discClass= "playerYellow"
  let player = turnTracker(numberOfDiscsPlayed)

  if (columnFull(boardModel, columnIndex) === true || gameWon(boardModel) === true) {
    return
  } else {
    if (player === "red") {
      currentDisc = red
      discClass = "playerRed"
    }
    for (let rowIndex = 5; rowIndex >= 0; rowIndex -= 1) {
      if (boardModel[rowIndex][columnIndex] === 0) {
        boardModel[rowIndex][columnIndex] = currentDisc
        numberOfDiscsPlayed += 1
        console.log(board)
        console.log(rowIndex)
        let columnArray= document.querySelectorAll (`#column${columnIndex} .emptySpace`)
        let gameSlot= columnArray[rowIndex]
        gameSlot.classList.add(discClass)
        gameSlot.classList.remove("emptySpace")
        console.log(columnArray)
        return
      }
    }
  }
}





let displayMessage = function (message) {
  messageBox.innerHTML = message
};

console.table(board)

let whoIsTheWinner = function (boardModel) {
  //check for 4 in a row
  //return the player number who won, or null
}

let gameWon= function(boardModel) {
  // board[y+3][x] board[y][x+1]
  // boardModel[y][x]
  const edgeX = boardModel[0].length - 2;
  // row
  const edgeY = boardModel.length - 2;

  for (let y = 0; y < boardModel.length; y = y + 1) {
    for (let x = 0; x < edgeX; x = x + 1) {
    
      if(boardModel[y][x] !== 0) {
        if(boardModel[y][x] === boardModel[y][x+1] && boardModel[y][x] === boardModel[y][x+2] && boardModel[y][x] === boardModel[y][x+3]) {
          displayMessage(`Player ${currentPlayer} has a 4 in a row horizontally!`)
        }
      }
    }
    for (let y = 0; y < edgeY; y = y + 1) {
      for (let x = 0; x < boardModel[0].length; x = x + 1) {
        
        if (boardModel[y][x] !== 0) {
          if (boardModel[y][x] === boardModel[y+1][x] && boardModel[y][x] === boardModel[y+2][x] && boardModel[y][x] === boardModel[y+3][x]) {
            displayMessage(`Player ${currentPlayer} has a 4 in a row vertically!`)
          }
        }
      }
    }
    for (let y = 0; y < edgeY; y = y + 1) {
      for (let x = 0; x < edgeX; x = x + 1) {
        
        if (boardModel[y][x] !== 0) {
          if (boardModel[y][x] === boardModel[y+1][x+1] && boardModel[y][x] === boardModel[y+2][x+2] && boardModel[y][x] === boardModel[y+3][x+3]) {
            displayMessage(`Player ${currentPlayer} has a 4 in a row diagonally!`)
            // diagonally down right
          }
        }
      }
    }
    for (let y = 2; y < boardModel.length; y = y + 1){
      for (let x = 0; x < edgeX; x = x + 1) {
        
        if (boardModel[y][x] !== 0) {
          if (boardModel[y][x] === boardModel[y-1][x+1] && boardModel[y][x] === boardModel[y-2][x+2] && boardModel[y][x] === boardModel[y-3][x+3]) {
            displayMessage(`Player ${currentPlayer} has a 4 in a row diagonally!`)
            // diagonally down left
          }
        }
      }
    }
  }


 
}

let isGameATie = function () {
  if (numberOfDiscsPlayed === 42) {
    return true
  }
  return false
}

let turnTracker = function (turnNumber) {
  let player = "yellow"
  if (turnNumber % 2 !== 0) {
    player = "red"
  }
  return player
}

let nextPlayer = function () {
  if (currentPlayer === 1) {
    currentPlayer = 2
    displayMessage(`Player ${currentPlayer} it's your turn`)
  } else if (currentPlayer === 2) {
    currentPlayer = 1
    displayMessage(`Player ${currentPlayer} it's your turn`)
  }
}

let gameOver = function () {

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

let setUpClickHandlers = function () {
  let col1 = document.querySelector("#column0")
  col1.addEventListener("click", function () {
    dropDisc(board, 0)
  })

  let col2 = document.querySelector("#column1")
  col2.addEventListener("click", function () {
    dropDisc(board, 1)
  })

  let col3 = document.querySelector("#column2")
  col3.addEventListener("click", function () {
    dropDisc(board, 2)
  })

  let col4 = document.querySelector("#column3")
  col4.addEventListener("click", function () {
    dropDisc(board, 3)
  })

  let col5 = document.querySelector("#column4")
  col5.addEventListener("click", function () {
    dropDisc(board, 4)
  })

  let col6 = document.querySelector("#column5")
  col6.addEventListener("click", function () {
    dropDisc(board, 5)
  })

  let col7 = document.querySelector("#column6")
  col7.addEventListener("click", function () {
    dropDisc(board, 6)
  })
}




let initializeGame = function () {
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
  [2, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

let testBoard4 = [
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0],
]

let testBoard5 = [
  [1, 2, 1, 2, 1, 2, 1],
  [2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1],
  [2, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 1, 2],
]