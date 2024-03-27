interface RestartProps {
    onRestartClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Restart = ({ onRestartClick }: RestartProps) => {
    return (
        <div style={{ marginTop: '15px' }}>
            <button style={{ width: '100%', backgroundColor: 'green', color: 'white' }} onClick={onRestartClick}>
                Restart?
            </button>
        </div>
    );
};
