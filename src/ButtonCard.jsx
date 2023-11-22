function ButtonCard({ onClick, buttonText, disabled }) {
    return (
        <nav className="Buttons">
            <button onClick={onClick} disabled={disabled}>
                {buttonText}
            </button>
        </nav>
    );
}

export default ButtonCard;