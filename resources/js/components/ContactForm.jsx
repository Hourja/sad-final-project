import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ContacthtmlForm() {
    return (
        <div className="contact-form">
            <h2><FontAwesomeIcon icon={["far", "envelope"]} size="xs"/> Contact us</h2>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                <input type="submit" value="Submit" className="submit-button"/>

            </form>
        </div>
    )
}

export default ContacthtmlForm;