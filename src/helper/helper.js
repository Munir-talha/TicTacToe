export const ticTacToeWin = (board) => {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true; 
    }
  }
}


export const checkEmpty = (a , b , c) => {
  if(a.length && b.length && c.length)
  {
    console.log("All have values")
  }
  else if(a.length && b.length)
  {
    console.log("a & b have values")

  }else if(a.length && c.length)
  {
    console.log("a & c have values")

  }else if(c.length && b.length)
  {
    console.log("c & b have values")

  }
  else {
    console.log("all are empty")

  }
} 