interface SquareProps {
    value: number;
    buttonClicked: React.MouseEventHandler<HTMLButtonElement>;
}

export const Square = ({ value, buttonClicked }: SquareProps) => {
    
    return <button className='square' onClick={buttonClicked}>{value}</button>;
};
