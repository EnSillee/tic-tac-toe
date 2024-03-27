interface SquareProps {
    value: null | string;
    onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Square = ({ value, onSquareClick }: SquareProps) => {
    // function handleClick() {
    //     setValue('x');
    // }

    return (
        <button className='square' onClick={onSquareClick}> 
            {value}
        </button>
    );
};
