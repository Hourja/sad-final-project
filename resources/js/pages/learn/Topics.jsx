import { Link, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchLanguageSlug from '../../requests/fetchLanguageSlug'
import Phrases from './Phrases'

export default function Topics({ categories }) {
  const [languageSlug, setLanguageSlug] = useState('')
  const [topicIds, setTopicIds] = useState(null)
  const [show, setShow] = useState(false)
  const { categoryId, city } = useParams()

  useEffect(loadLanguageSlug, [city])

  async function loadLanguageSlug() {
    const loadedLanguageSlug = await fetchLanguageSlug(city)
    setLanguageSlug(loadedLanguageSlug)
  }

  const category = categories.find((category) => {
    return category.id === Number(categoryId)
  })

  //getting topic ID and toggling show phrases -> needs better logic as it requires a double click
  // everytime you try to change topic.
  const getTopicId = (e) => {
    setTopicIds(e.target.value)
    setShow(!show)
  }

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
