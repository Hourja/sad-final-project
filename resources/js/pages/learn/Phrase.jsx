import { useState } from 'react'
import translate from '../../requests/translate'

export default function Phrase({ phrase, language }) {
  const [load, setLoad] = useState(true)
  const [translation, setTranslation] = useState('')

  const playPhrase = async (e) => {
    const translatedPhrase = await translate(language.id, phrase.id)

    setTranslation(translatedPhrase)
    setLoad(false)

    const utter = new SpeechSynthesisUtterance()
    utter.lang = language.slug
    utter.text = translatedPhrase
    // utter.onend = () => {e.target.innerHTML = initialPhrase};
    window.speechSynthesis.speak(utter)
  }

  return (
    <>
      {load ? (
        <span onClick={playPhrase}>{phrase.name}</span>
      ) : (
        <span onClick={() => setLoad(true)}>{translation}</span>
      )}
    </>
  )
}
