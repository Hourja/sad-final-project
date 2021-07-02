function City(props) {
    const { city } = props;
    return (
        <div className="city-container">
            <img src={require(`../../img/${city}.jpg`).default} alt={city} className="city-homepage-image"/>
            <p>{city}</p>
        </div>
    )
}

export default City;