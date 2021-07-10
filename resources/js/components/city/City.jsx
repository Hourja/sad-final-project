import { Link } from 'react-router-dom'
import './city.scss'

function City({ city }) {
  const { name, slug } = city

  function scrollToCity(e) {
    e.preventDefault()

    document.querySelector(`[data-city=${slug}]`).scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <Link to={`/city/${slug}`} className='main-city' onClick={scrollToCity}>
      <img src={`/images/${slug}.jpg`} alt={name} className='__picture' />
      <span className='__name'>{name}</span>
    </Link>
  )
}

export default City
