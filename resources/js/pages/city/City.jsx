import { useState, useEffect, useContext } from 'react'
import { NavLink, useParams, useRouteMatch, Route } from 'react-router-dom'
import Discover from '../discover/Discover'
import fetchCategories from '../../requests/fetchCategories'
import fetchCity from '../../requests/fetchCity'
import Learn from '../learn/Learn'
import Topics from '../learn/Topics'
import Gallery from '../../components/Gallery'
import NewMap from '../discover/NewMap'

import './city.scss'
import UserContext from '../../UserContext'

export default function City() {
  const { city } = useParams()
  const { url, path } = useRouteMatch()
  const { token } = useContext(UserContext)

  const [cityData, setCityData] = useState(null)

  async function loadCity() {
    const loadedCity = await fetchCity(city)
    setCityData(loadedCity)
  }
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    loadCategories(), loadCity()
  }, [city])

  async function loadCategories() {
    const loadedCategories = await fetchCategories(city, token)
    setCategories(loadedCategories)
  }

  if (!categories || !cityData) {
    return 'Loading...'
  }

  return (
    <main className='city'>
      <Gallery city={city} />
      {/* <img src={`/images/${city}.jpg`} /> */}
      <div className='text-city'>
        <h1 className='city-name'>{cityData.name}</h1>
        <h2>Choose an option below</h2>
      </div>
      <div className='__links'>
        <NavLink to={`${url}/learn`} className='__link' activeClassName='--active'>
          <p className='__title'>Learn</p>
          <p className='__description'> Get ready to use phrases in the local language</p>
        </NavLink>

        <NavLink to={`${url}/discover`} className='__link' activeClassName='--active'>
          <p className='__title'>Discover</p>
          <p className='__description'>Get a list of places of interest from locals</p>
        </NavLink>
      </div>

      <Route path={`${path}/discover/:categoryId?`} component={() => <Discover categories={categories} />} />
      <Route path={`${path}/discover/:categoryId`} component={() => <NewMap categories={categories} />} />

      <Route path={`${path}/learn/:categoryId?`} component={() => <Learn categories={categories} />} />
      <Route path={`${path}/learn/:categoryId`} component={() => <Topics categories={categories} />} />
    </main>
  )
}
