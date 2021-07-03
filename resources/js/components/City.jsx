import { Link } from "react-router-dom";

function City(props) {
    const { city } = props;
    return (
        <div className="city-container">
            <img src={require(`../../img/${city}.jpg`).default} alt={city} className="city-homepage-image"/>
            <Link to="/learn"><p>{city}</p></Link>
        </div>
    )
}

export default City;

//TEMPORARILY ADDED LINKS TO <P> TO REDIRECT TO /LEARN - spiros