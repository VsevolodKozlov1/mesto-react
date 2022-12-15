import headerLogo from '../images/header-logo.svg';

export default function Header() {
    return (
        <header className="header">
            <img src={headerLogo} alt={"Логотип"} className="header__logo" />
        </header>
    )
}