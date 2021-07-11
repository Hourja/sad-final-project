import { useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import ChangeLanguage from './ChangeLanguageButton'
import RowText from './RowText'

export default function Row({ phrase }) {
  const { url } = useRouteMatch()
  const { id, name } = phrase
  const [language, setLanguage] = useState('eng')
  const [rowText, setRowText] = useState(name)
  const [buttonText, setButtonText] = useState('English')
  const languageData = phrase.translations

  const languageRotation = () => {
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

  return (
    <>
      {languageData ? (
        <div>
          <RowText rowText={rowText} />

          <ChangeLanguage languageRotation={languageRotation} buttonText={buttonText} />

          <NavLink to={`${url}/phrase/${id}`} className='__link' activeClassName='--active'>
            <span className='__title'>Edit Phrase</span>
          </NavLink>
        </div>
      ) : null}
    </>
  )
}
