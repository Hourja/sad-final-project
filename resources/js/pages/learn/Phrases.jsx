import { useState, useEffect } from 'react'
import Phrase from './Phrase'
import fetchPhrases from '../../requests/fetchPhrase'

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
        <ul>
          {phrases.map((phrase, index) => (
            <li key={index}>
              <Phrase phrase={phrase} language={language} />
            </li>
          ))}
        </ul>
      ) : (
        'Loading'
      )}
    </>
  )
}
