let currentPlayer='X';
let board=['','','','','','','','',''];
let gameActive=true;
function makeMove(cell){
    const cellIndex=Array.from(cell.parentNode.children),indexOf(cell);
    if(board[cellIndex]===''&& gameActive){
        board[cellIndex]=currentPlayer;
        cell.textContent=currentPlayer;
        cell.classList.add(currentPlayer);
        if(checkWin()){
            document.querySelector(',result p').textContent='player ${currentPlayer} wins!';
            gameActive=false;

        }else if (!board.included)
    }
}