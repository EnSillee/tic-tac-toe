import React, { useState } from 'react';
import { Square } from '../components/Square';

export const Board = () => {
    const [inputNumber, setInputNumber] = useState<string | number>('버튼을 클릭해주세요');

    const buttonClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setInputNumber(event.currentTarget.textContent ?? 'click button please');
    };

    return (
        <>
            <div style={{ minWidth: '250px' }}>clicked number: {inputNumber}</div>
            <div className='board-row'>
                <Square value={1} buttonClicked={buttonClicked} />
                <Square value={2} buttonClicked={buttonClicked} />
                <Square value={3} buttonClicked={buttonClicked} />
            </div>
            <div>
                <Square value={4} buttonClicked={buttonClicked} />
                <Square value={5} buttonClicked={buttonClicked} />
                <Square value={6} buttonClicked={buttonClicked} />
            </div>
            <div>
                <Square value={7} buttonClicked={buttonClicked} />
                <Square value={8} buttonClicked={buttonClicked} />
                <Square value={9} buttonClicked={buttonClicked} />
            </div>
        </>
    );
};
