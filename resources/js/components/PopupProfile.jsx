import React from 'react'
import './popup.scss'
import { useContext, useState } from 'react'
import UserContext from '../UserContext'
import UpdateProfileForm from './UpdateProfileForm'

export default function PopupProfile({ parentClosePopup }) {
  const { user } = useContext(UserContext)
  const [{ name, email }, setValues] = useState({
    name: `${user.name}`,
    email: `${user.email}`
  })

  return (
    <div className='changes-popup'>
      <div className='popup-profile'>
        <div className='close-btn' onClick={parentClosePopup}>
          close X
        </div>
        <div className='popup-container'>
          <UpdateProfileForm name={name} email={email} setValues={setValues} />
        </div>
      </div>
    </div>
  )
}
