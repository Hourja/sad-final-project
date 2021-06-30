import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <nav className="top-menu">
                <Link to="/sign-up">Register</Link>
                <Link to="/sign-in">Login</Link>
                <Link to="/about-us">About</Link>
                <a href="">Contact</a>
            </nav>
            <p>S.A.D Final Project</p>
        </footer>

    )
}

export default Footer;