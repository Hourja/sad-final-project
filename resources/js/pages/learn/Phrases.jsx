import { useState, useEffect } from 'react'
import Phrase from './Phrase'
import fetchPhrase from '../../requests/fetchPhrase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import UserContext from '../../UserContext'

export default function Phrases({ topicIds, language }) {
  // const synth = window.speechSynthesis
  const [loaded, setLoaded] = useState(false)
  const [phrases, setPhrases] = useState([])
  const [favorites, setFavorites] = useState([])
  const { user } = useContext(UserContext)

  //FETCHING ALL THE BASIC ENGLISH PHRASES THAT WILL BE TRANSLATED ON CLICK

  // if (user) {
  //   async function loadFavorites() {
  //   const loadFavorites = await fetchFavorites(topicIds)
  //   setFavorites(loadedPhrases)
  //   }
  // }

  useEffect(loadPhrases, [topicIds])

  async function loadPhrases() {
    setLoaded(false)

    const loadedPhrases = await fetchPhrase(topicIds)
    setPhrases(loadedPhrases)

    setLoaded(true)
  }

  return (
    <>
      {loaded ? (
        <div className='list-phrases-topics'>
          <ul className='list-phrases-translations'>
            {phrases.map((phrase, index) => (
              <Phrase key={index} phrase={phrase} language={language} />
            ))}
          </ul>
        </div>
      ) : (
        <div className='loading-text'>Loading...</div>
      )}
    </>
  )
}
