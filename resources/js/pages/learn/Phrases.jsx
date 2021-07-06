import { useState, useEffect } from 'react'

export default function Phrases({ topicIds }) {
  const synth = window.speechSynthesis
  const [loaded, setLoaded] = useState(false)
  const [phrases, setPhrases] = useState([])

  async function fetchPhrases() {
    setLoaded(false)

    const url = `http://localhost:3000/api/table/getPhrases/${topicIds}`
    const resp = await fetch(url)
    const data = await resp.json()

    setPhrases(data)

    setLoaded(true)
  }

  useEffect(() => {
    fetchPhrases()
  }, [])

  // speak on click
  const playPhrase = (e) => {
    const utter = new SpeechSynthesisUtterance()
    utter.lang = e.target.getAttribute('data-lang')
    utter.text = e.target.innerHTML
    window.speechSynthesis.speak(utter)
  }

  return (
    <>
      {loaded ? (
        <ul>
          {phrases.map((phrase, index) => (
            <li key={index} onClick={playPhrase}>
              {phrase.name}
            </li>
          ))}
        </ul>
      ) : (
        'Loading'
      )}
    </>
  )
}

// NOTES FOR DEBUGGING LATER

{
  /*

<div onClick={playPhrase} data-lang="pl-PL">Gruba kaczka nie może latac</div> */
}

// const getVoices = () => {
//   let voices = synth.getVoices()
//   console.log(voices)
// }
// if (synth.onvoiceschanged !== undefined) {
//   synth.onvoiceschanged = getVoices
// }

//We are obtaining all the voices available by the API

//A special event that needs to happen before voices are available to be used
// Here we are checking if the event completed so that we can call the available voices
