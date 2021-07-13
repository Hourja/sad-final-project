import { useState, useEffect } from 'react'
import translate from '../../requests/translate'
import { useContext } from 'react'
import UserContext from '../../UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addFavorite, removeFavorite, checkFavorite } from '../../requests/favorites'
import Popup from './pop-up/Popup'

export default function Phrase({ phrase, language }) {
  const [load, setLoad] = useState(true)
  const [translation, setTranslation] = useState('')
  const { user, token } = useContext(UserContext)
  const [favorite, setFavorite] = useState(true)
  // const [errors, setErrors] = useState(null)
  const [popupVisible, setPopupVisible] = useState(false)

  const playPhrase = async () => {
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
    if (!token) {
      showPopup()
      return
    }

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

  const showPopup = () => {
    setPopupVisible(true)
  }

  const closePopup = () => {
    setPopupVisible(false)
  }

  return (
    <div className='translation-wrapper'>
      {favorite ? (
        <div className='favorite'>
          <FontAwesomeIcon icon={['far', 'heart']} className='empty-heart' onClick={addFav} />
          {popupVisible ? <Popup parentClosePopup={closePopup} /> : ''}
        </div>
      ) : (
        <div className='favorite'>
          <FontAwesomeIcon icon='heart' onClick={removeFav} className='full-heart' />
        </div>
      )}
      <div
        className='translation'
        onClick={() => {
          load ? playPhrase() : setLoad(true)
        }}
      >
        {load ? phrase.name : translation}
        <FontAwesomeIcon icon='volume-up' />
      </div>
    </div>
  )
}
