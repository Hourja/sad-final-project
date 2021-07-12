import { useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import ChangeLanguage from './ChangeLanguageButton'
import RowText from './RowText'
import deletePhrase from '../../../../requests/admin/deletePhrase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Row({ phrase }) {
  const { url } = useRouteMatch()
  const { id, name } = phrase
  const [language, setLanguage] = useState('eng')
  const [rowText, setRowText] = useState(name)
  const [buttonText, setButtonText] = useState('English')
  const languageData = phrase.translations

  //Logic to change the language on click for each row

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

  const confirmDelete = (e) => {
    !confirm(`You are about to delete [${name}] - Are you sure?`) && e.preventDefault()

    deletePhrase(id)
  }

  return (
    <>
      {languageData ? (
        <div>
          <RowText rowText={rowText} />

          <ChangeLanguage languageRotation={languageRotation} buttonText={buttonText} />

          <NavLink to={`${url}/phrase/${id}`} className='__link' activeClassName='--active'>
            <span className='__title'>Edit</span>
          </NavLink>
          <FontAwesomeIcon icon='trash-alt' onClick={confirmDelete}></FontAwesomeIcon>
        </div>
      ) : null}
    </>
  )
}
