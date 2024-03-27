interface RestartProps {
    onRestartClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Restart = ({ onRestartClick }: RestartProps) => {
    return (
        <div className="restart">
            <button style={{ width: '100%', backgroundColor: 'green', color: 'white' }} onClick={onRestartClick}>
                Restart?
            </button>
        </div>
    );
};
