import { useEffect, useState } from 'react'
import fetchCities from '../requests/fetchCities'
import { Link } from 'react-router-dom'
import './citiesBlock.scss'

export default function CitiesBlock() {
  const [cities, setCities] = useState(null)

  useEffect(loadCities, [])

  async function loadCities() {
    const loadedCities = await fetchCities()
    setCities(loadedCities)
  }

  if (!cities) {
    return 'Loading...'
  }

  return cities.map((city, i) => <City city={city} key={i} />)
}

function City({ city }) {
  const { name, slug, description } = city
  return (
    <div className='cities-block' data-city={slug}>
      <img className='__picture' src={`/images/${slug}.jpg`} alt={name} />
      <div className='__description'>
        <span>{name}</span>
        <p>{description}</p>
        <div className='__links'>
          <Link to={`/city/${slug}/learn`} className='__link'>
            Learn local language
          </Link>

          <Link to={`/city/${slug}/discover`} className='__link'>
            Discover the place
          </Link>
        </div>
      </div>
    </div>
  )
}
