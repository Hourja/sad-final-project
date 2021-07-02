import City from '../../components/City';
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';
import './Home.scss';

let cities = ["warsaw", "amsterdam", "london"];

function Homepage() {
    return(
        <div className="homepage">
            <div className="intro">
                <h1>Hello</h1>
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
                        <h3>Feature 1</h3>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="feature">
                        <h3>Feature 2</h3>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="feature">
                        <h3>Feature 3</h3>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
            
            <Testimonials />
            <ContactForm />
        </div>
    )
}

export default Homepage;