import { NavLink, useRouteMatch } from 'react-router-dom'

import deletePhrase from '../../../../requests/admin/deletePhrase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './row.scss'

export default function Row({ phrase, setUpdate }) {
  const { url } = useRouteMatch()

  const { id, name } = phrase

  const confirmDelete = (e) => {
    !confirm(`You are about to delete [${name}] - Are you sure?`) && e.preventDefault()
    deletePhrase(id)
    setUpdate(!true)
  }

  return (
    <div className='icons'>
      <NavLink to={`${url}/phrase/${id}`} className='link' activeClassName='--active'>
        <FontAwesomeIcon icon='pen' className='__edit'></FontAwesomeIcon>
      </NavLink>
      <FontAwesomeIcon icon='trash-alt' className='trash-icon' onClick={confirmDelete}></FontAwesomeIcon>
    </div>
  )
}
