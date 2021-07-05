import { Link, useRouteMatch, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Topics from './Topics'

export default function Category({ category }) {
  const { url } = useRouteMatch()
  const { topics } = category

  return (
    <>
      <Link to={`${url}/${category.id}`}>
        {/* <FontAwesomeIcon icon={['fas', category.photo_url]} size='lg' /> */}
        <p>{category.name}</p>
      </Link>
    </>
  )
}

//  {topics.map((topic, index) => (
//         <Link to={`${url}/topic/${topic.id}`} component={() => <div>{topic.name}</div>} />
//       ))}
