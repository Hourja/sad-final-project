import RowText from './RowText'
import { useState, useEffect } from 'react'
import ChangeLanguage from './ChangeLanguageButton'
import fetchTranslations from '../../../../requests/admin/fetchTranslations'

export default function ChangePhrase({ phrase }) {
  //   Logic to change the language on click for each row
  const { name } = phrase

  const [language, setLanguage] = useState('eng')
  const [rowText, setRowText] = useState(name)
  const [buttonText, setButtonText] = useState('English')
  const [translation, setTranslation] = useState(null)

  // something is wrong at line 12!
  useEffect(loadedData, [])

  async function loadedData() {
    const loadedTranslations = await fetchTranslations(phrase.id)
    setTranslation(loadedTranslations)
  }

  const languageData = translation

  const languageRotation = () => {
    if (languageData) {
      switch (language) {
        case 'gr':
          setRowText(name)
          setButtonText('English')
          setLanguage('eng')
          break
        case 'eng':
          setRowText(languageData[1].name)
          setButtonText('Portuguese')
          setLanguage('br')
          break
        case 'br':
          setRowText(languageData[0].name)
          setButtonText('Polish')
          setLanguage('pl')
          break
        case 'pl':
          setRowText(languageData[2].name)
          setButtonText('Greek')
          setLanguage('gr')
          break

        default:
          break
      }
    }
    return console.log('error')
  }
  return (
    <>
      <>
        <RowText rowText={rowText} />
        <ChangeLanguage languageRotation={languageRotation} buttonText={buttonText} />
      </>
    </>
  )
}
