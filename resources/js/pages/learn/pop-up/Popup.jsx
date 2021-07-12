import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './pop-up.scss'
import LoginForm from '../../../components/LoginForm'

export default function Popup({parentClosePopup}) {

    return (
        
        <div className="popup" id="popup-1" >
            <div className="overlay" onClick={parentClosePopup}></div>
            <div className="content-popup">
                <div className="close-btn" onClick={parentClosePopup}>
                ×</div>
                <div className="popup-container">
                    <LoginForm>
                        <div className="icon-heart"><FontAwesomeIcon icon='heart' size="2x" /></div>
                        <h2>Do you want to save your favorite phrases?</h2>
                    </ LoginForm>
                </div>
            </div>
        </div>
    )
}