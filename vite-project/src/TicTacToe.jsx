import { useState } from 'react';
import gingerbreadMan from './assets/gingerbreadman.jpg';
import wreath from './assets/wreath.jpg';
import './TicTacToe.css';

export function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);


    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                return true;
            }
        }
        return false;
    }
    const handleClick = async (index) => {
        if (board[index] === null && !winner) {
            const newBoard = [...board];
            newBoard[index] = currentPlayer;
            setBoard(newBoard);
            const isWinner = await calculateWinner(newBoard);
            if (isWinner) {
                return;
            }
            if (newBoard.every((item) => item !== null)) {
                setWinner('Draw');
                return;
            }
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

        }
    };
    const gingerbreadStyle = {
      backgroundColor: "lightblue",
      backgroundImage: `url(${gingerbreadMan})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    const wreathStyle = {
        backgroundColor: "lightblue",
        backgroundImage: `url(${wreath})`,
        backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    const renderSquare = (index) => {
        return (
            <button className="square" style={(board[index]) ? (board[index]==='X') ? gingerbreadStyle : wreathStyle : { backgroundColor: 'white'}} onClick={() => handleClick(index)}>
                {/*board[index]*/}
            </button>
        );
    };
    const playAgainFunc = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setCurrentPlayer('X');
    }
    const playAgain = (!winner) ? (<div style={{padding: 40}}></div>) : (<button className="playAgainButton" onClick={playAgainFunc}>Play Again</button>);
    const winnerBanner = (!winner) ? null : ((winner === 'Draw') ? <h2>The Match is a Draw</h2> : <h2>Winner: {(winner === 'X') ? 'Gingerbread' : 'Wreath' }</h2>);
    const nextPlayer = (!winner) ? <h2>Next Player: {(currentPlayer === 'X') ? 'Gingerbread' : 'Wreath' }</h2> : null;

    return (
      <div className='tictactoe'>
        <h1>Festive<br></br>Tic Tac Toe</h1>
        {nextPlayer}
        {winnerBanner}
        <div className="board">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        {playAgain}
      </div>
    );
}

export default TicTacToe;
