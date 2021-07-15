import './profile.scss'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import UserContext from '../../UserContext'
import Gravatar from './Gravatar'
import UpdateProfileForm from '../../components/UpdateProfileForm'
import UpdatePassword from '../resetPassword/UpdatePassword'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PopupProfile from '../../components/PopupProfile'
import PopupPassword from '../../components/PopupPassword'

export default function Profile() {
  const { user, loggedIn, isAdmin } = useContext(UserContext)
  const [{ name, email }, setValues] = useState({
    name: `${user.name}`,
    email: `${user.email}`
  })

  const [popupVisibleProfile, setPopupVisibleProfile] = useState(false)
  const [popupVisiblePassword, setPopupVisiblePassword] = useState(false)

  const changeProfile = () => {
    showPopupProfile()
    return
  }

  const showPopupProfile = () => {
    setPopupVisibleProfile(true)
  }

  const closePopupProfile = () => {
    setPopupVisibleProfile(false)
  }

  const changePassword = () => {
    showPopupPassword()
    return
  }

  const showPopupPassword = () => {
    setPopupVisiblePassword(true)
  }

  const closePopupPassword = () => {
    setPopupVisiblePassword(false)
  }

  return (
    <div className='profile-page'>
      <h1 className='profile-title'>My profile</h1>
      <Gravatar size='200' />
      <div className='user-details'>
        <div className='update-details'>
          <p className='name'>{name}</p>
          <p className='email'>{email}</p>
          <div className='change-email-name'>
            <div className='text' onClick={changeProfile}>
              <FontAwesomeIcon icon='address-card' className='__edit' /> Update details{' '}
            </div>
            {popupVisibleProfile ? <PopupProfile parentClosePopup={closePopupProfile} /> : ''}
          </div>
        </div>
        <div className='update-password'>
          <div onClick={changePassword}>
            <FontAwesomeIcon icon='key' className='__edit' size='0.5x'></FontAwesomeIcon> Change Password
          </div>
          {popupVisiblePassword ? <PopupPassword parentClosePopup={closePopupPassword} /> : ''}
        </div>
      </div>
      {loggedIn && isAdmin && (
        <Link to='/admin' className='__link'>
          Admin Panel
        </Link>
      )}
    </div>
  )
}
