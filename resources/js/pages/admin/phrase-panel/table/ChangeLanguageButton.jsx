import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './changeLanguage.scss'

export default function ChangeLanguage({ languageRotation, buttonText }) {
  return <button onClick={languageRotation}>{buttonText}</button>
}

//style={{ borderRadius: '12px!important'}}
