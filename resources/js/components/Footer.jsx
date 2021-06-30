import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <nav className="top-menu">
                <a href="">Register</a>
                <a href="">Login</a>
                <Link to="/about-us">About</Link>
                <a href="">Contact</a>
            </nav>
            <p>S.A.D Final Project</p>
        </footer>
        
    )
}

export default Footer;