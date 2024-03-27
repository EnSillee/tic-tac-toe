interface ClickedButtonProps {
    ButtonNumberStr: string;
}

export const ClickedButton = ({ ButtonNumberStr }: ClickedButtonProps) => {
    return (
        <div style={{ display: 'flex', width: '259px', height: '50px', fontSize: '1rem', gap: '6px' }}>
            <div>clicked number: </div>
            <div>{ButtonNumberStr}</div>
        </div>
    );
};
