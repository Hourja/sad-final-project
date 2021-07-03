import { Link } from 'react-router-dom'

export default function Category({ category }) {
  return (
    <Link
      to={{
        pathname: '/topics',
        state: {
          topics: category.topics
        }
      }}
    >
      <p>{category.name}</p>
    </Link>
  )
}
