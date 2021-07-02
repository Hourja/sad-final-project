import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <nav className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="/sign-up">Register</Link>
                <Link to="/sign-in">Login</Link>
                <Link to="/about-us">About</Link>
                <a href="">Contact</a>
            </nav>
            <p>Made with ❤️ by S.A.D</p>
        </footer>

    )
}

export default Footer;