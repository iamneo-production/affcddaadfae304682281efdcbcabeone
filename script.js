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

        }else if (!board.included('')){
            document.querySelector(',result p').textContent="It's a draw!";
            gameActive=false;

        }else{
            currentPlayer=currentPlayer==='X'?'0':'X';
            document.querySelector('.result p').textContent='Player ${currentPlayer}'s turn'

        }
    }
}
function checkWin(){
    const winningCombination=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    return winningCombination.some(combination=>{
        const
    })
}