import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className="social-footer">
                <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
                <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
            </div>
            <p className="credits-footer">Made with ❤️ by S.A.D</p>             
        </footer>

    )
}

export default Footer;