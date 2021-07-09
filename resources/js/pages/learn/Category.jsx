import { NavLink, useRouteMatch, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Category({ category }) {
  const { url } = useRouteMatch()
  const { categoryId } = useParams()

  return (
    
      <NavLink
        to={`${categoryId ? url.substring(0, url.lastIndexOf('/')) : url}/${category.id}`}
        className={'category-link ' + (categoryId == category.id ? 'show' : 'hidden')}>
          <div className='category-icons'>
            <FontAwesomeIcon icon={category.photo_url} size='2x' />
          </div>
          <div className='category-tooltip'>{category.name}</div>
      </NavLink>

  )
}
