import { Link, Redirect } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../../../js/UserContext'
import './pop-up.scss'


export default function Popup({parentClosePopup}) {

    const { loggedIn, login } = useContext(UserContext)

    if (loggedIn) {
        return <Redirect to='/' />
    }

    const [loginFailed, setLoginFailed] = useState(false)
    const [loading, setLoading] = useState(false)
    const [{ email, password }, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault()

        setLoading(true)
        const worked = await login({ email, password })

        if (!worked) {
        setLoading(false)
        setLoginFailed(true)
        return
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['email', 'password'],
        name = event.target.name,
        value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
        setValues((prev_values) => {
            return { ...prev_values, [name]: value }
        })
        }
    }

    return (
        
        <div className="popup" id="popup-1" >
            <div className="overlay" onClick={() => {
                parentClosePopup()
            }}></div>
            <div className="content-popup">
                <div className="close-btn" onClick={parentClosePopup}>
                ×</div>
                <div className="icon-heart"><FontAwesomeIcon icon='heart' size="2x" /></div>
                <h1>Do you want to save your favorite phrases?</h1>
                <h2>Sign in</h2>  
                <form className='login' action='/login' method='post' onSubmit={handleSubmit}>
                    <label htmlFor='email'>
                    Email:
                    <input className='input-field' type='email' name='email' value={email} onChange={handleChange} />
                    </label>

                    <label htmlFor='email'>
                    Password:
                    <input className='input-field' type='password' name='password' value={password} onChange={handleChange} />
                    </label>

                    <button className='login-button-popup'>{loading ? 'In progress...' : 'Login'}</button>

                    {loginFailed && <div className='__error'>Your credentials are invalid</div>}

                    <div className='logged'>
                    Don't have an account? <Link to='/sign-up'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}