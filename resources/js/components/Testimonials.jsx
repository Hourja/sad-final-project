import './testimonials.scss'

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
            <div className='testimonial' key={i}>
              <p className='testimonial-text'>{testimonial.text}</p>
              <p className='testimonial-author'>{testimonial.person}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
