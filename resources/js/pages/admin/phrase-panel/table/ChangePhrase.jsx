import RowText from './RowText'
import { useState } from 'react'
import ChangeLanguage from './ChangeLanguageButton'

export default function ChangePhrase({ phrase, phrases }) {
  //   Logic to change the language on click for each row
  const { name } = phrase
  const [language, setLanguage] = useState('eng')
  const [rowText, setRowText] = useState(name)
  const [buttonText, setButtonText] = useState('English')
  // something is wrong at line 12!
  const languageData = phrases[phrase.id].translations

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
      <RowText rowText={rowText} />
      <ChangeLanguage languageRotation={languageRotation} buttonText={buttonText} />
    </>
  )
}
