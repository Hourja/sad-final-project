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
      <Link to={`/city/${slug}/city`} className='__city-link' data-name={name}>
        <img className='__picture' src={`/images/${slug}.jpg`} alt={name} />
      </Link>
      <div className='__description'>
        <Link to={`/city/${slug}/city`} className='__name'>
          {name}
        </Link>
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
