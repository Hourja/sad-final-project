import { Link, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchLanguage from '../../requests/fetchLanguage'
import Phrases from './Phrases'

export default function Topics({ categories }) {
  const [language, setLanguage] = useState('')
  const [topicIds, setTopicIds] = useState(null)
  const { categoryId, city } = useParams()

  useEffect(loadLanguage, [city])

  //LOADING LANGUAGES BY SEARCHING IN DB WITH CITY FROM URL
  async function loadLanguage() {
    const loadedLanguage = await fetchLanguage(city)
    setLanguage(loadedLanguage)
  }

  const category = categories.find((category) => {
    return category.id === Number(categoryId)
  })

  //getting topic ID and toggling show phrases -> needs better logic as it requires a double click
  // everytime you try to change topic.

  const getTopicId = (e) => {
    setTopicIds(e.target.value)
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
      <div>
        <Phrases topicIds={topicIds} language={language} />
      </div>
    </div>
  )
}
