import { useState, useEffect } from 'react'
import { NavLink, useParams, useRouteMatch, Route } from 'react-router-dom'
import Discover from '../discover/Discover'
import fetchCategories from '../../requests/fetchCategories'
import Learn from '../learn/Learn'
import Topics from '../learn/Topics'
import Gallery from '../../components/Gallery'
import Map from '../discover/Map'

import './city.scss'

export default function City() {
  const { city } = useParams()
  const { url, path } = useRouteMatch()

  const [categories, setCategories] = useState(null)

  useEffect(loadCategories, [city])

  async function loadCategories() {
    const loadedCategories = await fetchCategories(city)
    setCategories(loadedCategories)
  }

  if (!categories) {
    return 'Loading...'
  }

  return (
    <main className='city'>
      <Gallery city={city} />
      {/* <img src={`/images/${city}.jpg`} /> */}
      <div className='text-city'>
        <h1 className='city-name'>{city}</h1>
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
      <Route path={`${path}/discover/:categoryId`} component={() => <Map categories={categories} />} />

      <Route path={`${path}/learn/:categoryId?`} component={() => <Learn categories={categories} />} />
      <Route path={`${path}/learn/:categoryId`} component={() => <Topics categories={categories} />} />
    </main>
  )
}
