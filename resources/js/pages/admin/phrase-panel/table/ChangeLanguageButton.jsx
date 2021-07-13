import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './changeLanguage.scss'

export default function ChangeLanguage({ languageRotation, buttonText }) {
  return (
    <button onClick={languageRotation}>
      {buttonText} <FontAwesomeIcon icon='globe-americas' />
    </button>
  )
}
