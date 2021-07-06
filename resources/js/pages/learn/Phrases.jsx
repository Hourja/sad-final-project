import { useState, useEffect } from 'react'
import Phrase from './Phrase'
import fetchPhrases from '../../requests/fetchPhrase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Phrases({ topicIds, language }) {
  const synth = window.speechSynthesis
  const [loaded, setLoaded] = useState(false)
  const [phrases, setPhrases] = useState([])

  //FETCHING ALL THE BASIC ENGLISH PHRASES THAT WILL BE TRANSLATED ON CLICK

  useEffect(loadPhrases, [topicIds])

  async function loadPhrases() {
    setLoaded(false)

    const loadedPhrases = await fetchPhrases(topicIds)
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
