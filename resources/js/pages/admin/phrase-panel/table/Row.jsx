import { NavLink, useRouteMatch } from 'react-router-dom'

import deletePhrase from '../../../../requests/admin/deletePhrase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Row({ phrase, setUpdate }) {
  const { url } = useRouteMatch()

  const { id, name } = phrase

  const confirmDelete = (e) => {
    !confirm(`You are about to delete [${name}] - Are you sure?`) && e.preventDefault()
    deletePhrase(id)
    setUpdate(!true)
  }

  return (
    <>
      <NavLink to={`${url}/phrase/${id}`} className='__link' activeClassName='--active'>
        <span className='__title'>Edit</span>
      </NavLink>
      <FontAwesomeIcon icon='trash-alt' onClick={confirmDelete}></FontAwesomeIcon>
    </>
  )
}
