import { useState } from 'react'
import translate from '../../requests/translate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className='translation' onClick={playPhrase}>
          {phrase.name}
          <FontAwesomeIcon icon='volume-up' />
        </div>
      ) : (
        <div className='translation' onClick={() => setLoad(true)}>
          {translation}
          <FontAwesomeIcon icon='volume-up' />
        </div>
      )}
    </>
  )
}
