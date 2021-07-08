import fetchTopics from '../../../requests/admin/fetchTopics'
import { useState, useEffect } from 'react'

export default function Topics({ handleChange, setTopics, topics }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(loadTopics, [])

  async function loadTopics() {
    setLoaded(false)

    const loadedTopics = await fetchTopics()
    setTopics(loadedTopics)

    setLoaded(true)
  }

  return (
    <>
      {loaded ? (
        <label htmlFor='topic'>
          Choose a topic
          <select name='topic' onChange={handleChange}>
            {topics.map((topic, index) => (
              <option key={index} value={topic.id}>
                {topic.name}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <div className='loading-text'>Loading...</div>
      )}
    </>
  )
}
