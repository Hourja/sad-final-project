import { Link, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Phrases from './Phrases'

export default function Topics({ categories }) {
  const { categoryId } = useParams()

  const category = categories.find((category) => {
    return category.id === Number(categoryId)
  })

  console.log(category)

  const [topicIds, setTopicIds] = useState(null)
  const [show, setShow] = useState(false)

  //getting topic ID and toggling show phrases -> needs better logic as it requires a double click
  // everytime you try to change topic.
  const getTopicId = (e) => {
    setTopicIds(e.target.value)
    setShow(!show)
  }

  // Used useLocation hook to obtain the categories object from the previous page (for now)
  // Unable to access this page unless u come from Category page <- current issue

  return (
    <div>
      <ul>
        {category.topics.map((topic, index) => (
          <li key={index} onClick={getTopicId} value={topic.id}>
            {topic.name}
          </li>
        ))}
      </ul>

      {show ? (
        <div>
          <Phrases topicIds={topicIds} />
        </div>
      ) : (
        <p>Hide phrases</p>
      )}
    </div>
  )
}
