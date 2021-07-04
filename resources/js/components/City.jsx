import { Link } from "react-router-dom";

function City({ city }) {
    const {name,slug} = city
    return (
        <div className="city-container">
            <img src={`/images/${slug}.jpg`} alt={name} className="city-homepage-image"/>
            <Link to="/learn"><p>{name}</p></Link>
        </div>
    )
}

export default City;

//TEMPORARILY ADDED LINKS TO <P> TO REDIRECT TO /LEARN - spiros