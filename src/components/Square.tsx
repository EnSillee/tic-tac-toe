// interface SquareProps {
//     value: number;
//     ButtonNumberStr: string,
//     buttonClicked: React.MouseEventHandler<HTMLButtonElement>;
// }

import { useState } from 'react';

export const Square = () => {
    const [value, setValue] = useState<null | string>(null);

    function handleClick() {
        setValue('x');
    }

    return (
        <button className='square' onClick={handleClick}>
            {value}
        </button>
    );
};
