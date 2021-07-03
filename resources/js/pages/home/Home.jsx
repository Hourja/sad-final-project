import City from '../../components/City';
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let cities = ["warsaw", "amsterdam", "london"];

function Homepage() {
    return(
        <div className="homepage">
            <div className="intro">
                <h1>Hello <FontAwesomeIcon icon="globe-americas" /></h1>
                <h2>Discover the world & Learn a new language</h2>
                <p className="select-city-title">Select your City</p>
                <p className="select-city-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tenetur iste odio, quas assumenda consequuntur nam sed nobis ipsa optio, omnis libero soluta officia sint doloremque in, ab ratione deleniti?</p>
            </div>
            <div className="cities-wrapper">
                {
                    cities.map((city,i) => {
                        return <City city={city} key={i} />
                    })
                }
            </div>
            <div className="explore">
                <h2>Explore the city and learn a new language</h2>
                <p className="explore-description">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                <div className="features">
                    <div className="feature">
                        <h3><FontAwesomeIcon icon="plane" size="lg" /> Feature 1</h3>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="feature">
                        <h3><FontAwesomeIcon icon={["far", "laugh-beam"]}  size="lg"/> Feature 2</h3>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="feature">
                        <h3><FontAwesomeIcon icon="map-marked-alt"  size="lg"/> Feature 3</h3>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>

            <Testimonials />
            <ContactForm h2={<><FontAwesomeIcon icon={["far", "envelope"]} size="xs"/> Contact us</>}/>
        </div>
    )
}

export default Homepage;