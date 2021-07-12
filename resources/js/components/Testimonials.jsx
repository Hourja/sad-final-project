import './testimonials.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Testimonials() {
  let data = [
    {
      person: 'Jon Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
    },
    {
      person: 'John Smith',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
    },
    {
      person: 'Juan Perez',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
    }
  ]
  return (
    <div className='testimonials-list'>
      <h2>Testimonials</h2>
      <div className='testimonials-wrapper'>
        {data.map((testimonial, i) => {
          return (
            <>
              <FontAwesomeIcon icon='quote-left' />
              <div className='testimonial' key={i}>
                <span className='testimonials-text'>{testimonial.text}</span> <br />
                <span className='testimonial-author'>{testimonial.person}</span>
              </div>
              <FontAwesomeIcon icon='quote-right' className='quote-right' />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
