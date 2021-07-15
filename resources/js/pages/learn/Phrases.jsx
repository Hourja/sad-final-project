import { useState, useEffect } from 'react'
import Phrase from './Phrase'
import fetchPhrase, { fetchMyPhrases } from '../../requests/fetchPhrase'
import { useContext } from 'react'
import UserContext from '../../UserContext'
import { useParams } from 'react-router-dom'
import Errors from '../../components/Errors'

export default function Phrases({ topicId, language, load, setLoad }) {
  const [errors, setErrors] = useState(null)
  const [phrases, setPhrases] = useState(null)
  const { token, loggedIn } = useContext(UserContext)
  const { categoryId } = useParams()

  //FETCHING ALL THE BASIC ENGLISH PHRASES THAT WILL BE TRANSLATED ON CLICK

  //
  useEffect(loadPhrases, [topicId])

  async function loadPhrases() {
    setPhrases(null)
    const loadedPhrases = await (loggedIn && topicId === 'favorite'
      ? fetchMyPhrases(categoryId, token)
      : fetchPhrase(topicId))
    setPhrases(loadedPhrases)
  }

  return (
    <>
      {phrases ? (
        <div className='list-phrases-topics'>
          <ul className='list-phrases-translations'>
            {phrases.map((phrase, index) => (
              <Phrase
                key={index}
                phrase={phrase}
                language={language}
                setErrors={setErrors}
                loadCategories={load}
                setLoadCategories={setLoad}
              />
            ))}
          </ul>
          <Errors errors={errors} />
        </div>
      ) : (
        <div className='loading-text'>Loading...</div>
      )}
    </>
  )
}
