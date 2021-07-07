import { useState, useEffect } from 'react'
import { NavLink, useParams, useRouteMatch, Route } from 'react-router-dom'
import Discover from '../discover/Discover'
import fetchCategories from '../../requests/fetchCategories'
import Learn from '../learn/Learn'
import Topics from '../learn/Topics'
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
      <img src={`/images/${city}.jpg`} />
      <h1>Choose an Option</h1>
      <div className='__links'>
        <NavLink to={`${url}/learn`} className='__link' activeClassName='--active'>
          <span className='__title'>Learn</span>
          <span className='__description'> Get personalized and ready to use phrases</span>
        </NavLink>

        <NavLink to={`${url}/discover`} className='__link' activeClassName='--active'>
          <span className='__title'>Discover</span>
          <span className='__description'>Get a list of bars,museums, and other places of interest</span>
        </NavLink>
      </div>

      <Route path={`${path}/discover/:categoryId?`} component={() => <Discover categories={categories} />} />
      <Route path={`${path}/discover/:categoryId`} component={() => <Map categories={categories} />} />

      <Route path={`${path}/learn/:categoryId?`} component={() => <Learn categories={categories} />} />
      <Route path={`${path}/learn/:categoryId`} component={() => <Topics categories={categories} />} />
    </main>
  )
}
