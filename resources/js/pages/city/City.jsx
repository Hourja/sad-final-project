import { NavLink, useParams, useRouteMatch, Route } from 'react-router-dom'
import Discover from '../learn/Discover'
import Learn from '../learn/Learn'

import './city.scss'

export default function City() {
  const { city } = useParams()
  const { url, path } = useRouteMatch()

  console.log(url, path)

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

      <Route path={`${path}/discover`} component={Discover} />
      <Route path={`${path}/learn`} component={Learn} />
      <Route path={`${path}/learn/topics`} component={() => <div>topics</div>} />
    </main>
  )
}
