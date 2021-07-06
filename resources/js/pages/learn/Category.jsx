import { NavLink, useRouteMatch, Route, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Topics from './Topics'

export default function Category({ category }) {
  const { url } = useRouteMatch()
  const { topics } = category
  const  { categoryId } = useParams()
  console.log(categoryId)

  return (

      <div className="category-icons">
        <NavLink to={`${categoryId ? url.substring(0, url.lastIndexOf('/') ) : url}/${category.id}`} className={"category-link " + (categoryId == category.id ? 'show' : 'hidden')}>
          <FontAwesomeIcon icon={category.photo_url} size='lg' />
        </NavLink>
        <div className="category-tooltip">{category.name}</div>
      </div>

  )
}

//  {topics.map((topic, index) => (
//         <Link to={`${url}/topic/${topic.id}`} component={() => <div>{topic.name}</div>} />
//       ))}
