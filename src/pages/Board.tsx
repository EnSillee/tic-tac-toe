import React, { useState } from 'react';
import { Square } from '../components/Square';
import { ClickedButton } from '../components/ClickedButton';

export const Board = () => {
    const [ButtonNumberStr, setButtonNumberStr] = useState<string>('버튼을 클릭해주세요');

    const buttonClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setButtonNumberStr(event.currentTarget.textContent ?? 'click button please');
    };

    return (
        <>
            <ClickedButton ButtonNumberStr={ButtonNumberStr} />
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
