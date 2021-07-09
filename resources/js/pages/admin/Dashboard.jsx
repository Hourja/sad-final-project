import React from 'react'
import { NavLink, useRouteMatch, Route, Switch } from 'react-router-dom'
import NewPhraseForm from './phrase-panel/create/NewPhraseForm'
import BasicTable from './phrase-panel/table/BasicTable'

export default function Dashboard() {
  const { url, path } = useRouteMatch()
  return (
    <main className='city'>
      <h1>Dashboard</h1>

      <Switch>
        <Route exact path={path} component={DashboardNavigation} />
        <Route exact path={`${path}/phrases/create`} component={NewPhraseForm} />
        <Route path={`${path}/tables/phrase/:id`} component={() => <div>check</div>} />
        <Route path={`${path}/tables`} component={BasicTable} />
      </Switch>
    </main>
  )
}

function DashboardNavigation() {
  return (
    <div className='__links'>
      <NavLink to={`${url}/phrases/create`} className='__link' activeClassName='--active'>
        <span className='__title'>Create a Phrase</span>
      </NavLink>
      <NavLink to={`${url}/tables`} className='__link' activeClassName='--active'>
        <span className='__title'>Show All</span>
      </NavLink>
    </div>
  )
}
