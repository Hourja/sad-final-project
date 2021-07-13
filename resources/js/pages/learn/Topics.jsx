import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import fetchLanguage from '../../requests/fetchLanguage'
import Phrases from './Phrases'

export default function Topics({ categories }) {
  const [language, setLanguage] = useState('')
  const [topicId, setTopicId] = useState(null)
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
    setTopicId(e.target.dataset.topicid)
  }

  return (
    <div className='topics-list'>
      <ul className='topics-list-city'>
        {category.topics.map((topic, index) => (
          <li
            key={index}
            onClick={getTopicId}
            data-topicid={topic.id}
            className={topicId == topic.id ? 'selected' : ''}
          >
            {topic.name}
            {console.log(topic)}
          </li>
        ))}
      </ul>

      <div className='phrases-list'>
        {topicId ? (
          <Phrases topicId={topicId} language={language} />
        ) : (
          <div className='loading-text'>Select a topic from the left</div>
        )}
      </div>
    </div>
  )
}
