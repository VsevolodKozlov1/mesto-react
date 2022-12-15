export default function PopupWithForm({
    name,
    title,
    children,
    submitValue,
    isOpen,
    onClose
}) {
    return (
        <div className={`popup popup_section_${name} ${isOpen && 'popup_opened'}`}>
            <div className={`popup__container popup__container_${name}`}>
                <h2 className="popup__header">{title}</h2>
                <form
                    className={`popup__form popup__form_section_${name}`}
                    name={`${name}-form`}
                    noValidate
                >
                    {children}
                    <input
                        type="submit"
                        className={`popup__submit popup__submit_section_${name} button-hover`}
                        value={submitValue}
                    />
                </form>
                <button
                    type="button"
                    className="popup__close-button button-hover"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    )
}