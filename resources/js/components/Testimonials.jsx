import './testimonials.scss'
import { useEffect, useState } from 'react'
import fetchTestimonials from '../requests/fetchTestimonials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Testimonials() {
  const [testimonials, setTestimonials] = useState(null)

  useEffect(loadTestimonials, [])

  async function loadTestimonials() {
    const loadedTestimonials = await fetchTestimonials()
    setTestimonials(loadedTestimonials)
  }

  if (!testimonials) {
    return 'Loading...'
  }

  console.log(testimonials.length)

  return (
    <div className='testimonials-list'>
      <h2>Testimonials</h2>
      <div className='testimonials-wrapper'>
        <TestimonialSlides testimonials={testimonials} />
      </div>
    </div>
  )
}

function TestimonialSlides({ testimonials }) {
  const [state, setState] = useState({
    isShowing: true,
    isAnimating: true,
    index: 0
  })

  const { isShowing, isAnimating, index } = state

  useEffect(doSlides, [])

  const timeBetweenSlides = 5_000

  function doSlides() {
    let externalReject = () => {}

    function runSlides(newIndex) {
      return new Promise(async (_, reject) => {
        externalReject = reject
        let currentIndex = newIndex
        let nextIndex = testimonials.length - 1 === newIndex ? 0 : newIndex + 1
        await sleep(timeBetweenSlides)
        setState({ index: currentIndex, isShowing: false, isAnimating: true })

        await sleep(500)
        setState({ index: nextIndex, isShowing: true, isAnimating: false })

        await sleep(500)
        setState({ index: nextIndex, isShowing: true, isAnimating: true })

        await sleep(timeBetweenSlides - 1000)
        await runSlides(nextIndex)
      })
    }

    runSlides(index)

    return () => externalReject()
  }

  const current = testimonials[index]
  const isNotLast = index !== testimonials.length - 1
  const next = isNotLast ? testimonials[index + 1] : testimonials[0]

  const currentState = isShowing ? '--showing' : '--hidden'
  const nextState = isShowing ? '--waiting' : '--showing'

  const animationsState = isAnimating ? '--animation' : ''

  return (
    <>
      <Testimonial className={`${currentState} ${animationsState}`} testimonial={current} />

      <Testimonial className={`${nextState} ${animationsState}`} testimonial={next} />
    </>
  )
}

function Testimonial({ testimonial, className, index }) {
  return (
    <div className={`testimonial ${className}`}>
      <span className='testimonials-text'>
        <FontAwesomeIcon icon='quote-left' />
        {testimonial.text}
        <FontAwesomeIcon icon='quote-right' className='quote-right' />
      </span>
      <br />
      <span className='testimonial-author'>{testimonial.name}</span>
    </div>
  )
}

export default Testimonials

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
