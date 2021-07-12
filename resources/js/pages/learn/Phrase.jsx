import { useState, useEffect } from 'react'
import translate from '../../requests/translate'
import { useContext } from 'react'
import UserContext from '../../UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addFavorite, removeFavorite, checkFavorite } from '../../requests/favorites'

export default function Phrase({ phrase, language }) {
  const [load, setLoad] = useState(true)
  const [translation, setTranslation] = useState('')
  const { user, token } = useContext(UserContext)
  const [favorite, setFavorite] = useState(true)
  const [status, setStatus] = useState(true)

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

  useEffect(check, [])

  async function check() {
    const { success } = await checkFavorite(phrase.id, user.id, token)

    if (success) {
      setFavorite(false)
      return
    }

    setFavorite(true)
  }

  const addFav = async () => {
    const { success, errors } = await addFavorite(phrase.id, user.id, token)

    if (!success) {
      return setErrors(errors)
    }

    check()
  }

  const removeFav = async () => {
    const { success, errors } = await removeFavorite(phrase.id, user.id, token)

    if (!success) {
      return setErrors(errors)
    }

    check()
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
      {favorite ? (
        <div className='favorite'>
          <FontAwesomeIcon icon='heart' onClick={addFav} />
        </div>
      ) : (
        <div className='favorite'>
          <FontAwesomeIcon icon='globe' onClick={removeFav} />
        </div>
      )}
    </>
  )
}
