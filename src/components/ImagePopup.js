export default function ImagePopup({
    card,
    onClose
}) {
    return (
        <div className={`popup popup_section_zoom-in ${card && 'popup_opened'}`}>
            <div className="popup__figure">
                <img className="popup__photo" src={card.link} alt={card.name} />
                <p className="popup__caption">{card.name}</p>
                <button
                    type="button"
                    className="popup__close-button button-hover"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    )
}