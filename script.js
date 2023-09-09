// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', () =>{
  let board = null; // Initialize the chessboard
  const game = new Chess(); //Create new Chess.js game instance
  const moveHistory = document.getElementById('move-history'); //Get move history container
  let moveCount = 1; //Initialize the move count
  let userColor = 'w'; // Initialize the user's color as white

  //
})