import { Link } from 'react-router-dom'
import './city.scss'

function City({ city }) {
  const { name, slug } = city
  return (
    <Link to={`/city/${slug}`} className='main-city'>
      <img src={`/images/${slug}.jpg`} alt={name} className='__picture' />
      <span className='__name'>{name}</span>
    </Link>
  )
}

export default City
