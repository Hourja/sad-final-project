import { Link, useRouteMatch, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Topics from './Topics'

export default function Category({ category }) {
  const { url } = useRouteMatch()
  const { topics } = category

  return (

      <div className="category-icons">
        <Link to={`${url}/${category.id}`} className="category-link">
          <FontAwesomeIcon icon={category.photo_url} size='lg' />
          {/* <p>{category.name}</p> */}
        </Link>
      </div>

  )
}

//  {topics.map((topic, index) => (
//         <Link to={`${url}/topic/${topic.id}`} component={() => <div>{topic.name}</div>} />
//       ))}
