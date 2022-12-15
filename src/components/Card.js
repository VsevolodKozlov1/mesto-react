export default function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="gallery__item">
            <div className="gallery__img-placeholder">
                <img
                    src={card.link}
                    alt={card.name}
                    className="gallery__photo"
                    onClick={handleClick}
                />
            </div>
            <button type="button" className="gallery__del-button button-hover"></button>
            <div className="gallery__caption">
                <h2 className="gallery__item-descr">{card.name}</h2>
                <div className="gallery__like">
                    <button type="button" className="gallery__like-button button-hover"></button>
                    <p className="gallery__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}