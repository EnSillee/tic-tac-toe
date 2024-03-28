import { useEffect, useState } from 'react';
import { Square } from '../components/Square';
import { Restart } from '../components/Restart';
import { calculateWinner } from '../utils/calculateWinner';

export const Board = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState<Array<null | string>>(Array(9).fill(null));

    function handleClick(index: number) {
        if (squares[index] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();

        xIsNext === true ? (nextSquares[index] = 'X') : (nextSquares[index] = 'O');

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function handleRestartClick() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    const winner = calculateWinner(squares);

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        if (squares.indexOf(null) === -1) {
            status = 'Tie Game';
        } else {
            status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
        }
    }

    return (
        <>
            <div className='status'>{status}</div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>

            {winner || (status === 'Tie Game' && <Restart onRestartClick={handleRestartClick} />)}
        </>
    );
};
