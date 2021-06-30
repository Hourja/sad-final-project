import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="top-menu">
            <Link to="/sign-up">Register</Link>
            <Link to="/sign-in">Login</Link>
            <Link to="/about-us">About</Link>
            <a href="">Contact</a>
        </nav>
    )
}

export default Header;