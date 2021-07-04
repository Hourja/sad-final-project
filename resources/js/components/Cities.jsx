import { useEffect, useState } from 'react'
import fetchCities from '../requests/fetchCities'
import City from './City'

export default function Cities() {
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
