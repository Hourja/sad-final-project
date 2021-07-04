import { Link, useRouteMatch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Category({ category }) {
  const { url } = useRouteMatch()

  return (
    <Link to={`${url}/topics`}>
      <FontAwesomeIcon icon={['fas', category.photo_url]} size='lg' />
      <p>{category.name}</p>
    </Link>
  )
}
