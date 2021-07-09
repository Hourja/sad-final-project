import React, { useEffect, useState } from 'react'

import './darkMode.scss'

function DarkMode() {
  const storedDarkMode = localStorage.getItem('DARK_MODE')

  const [darkMode, setDarkMode] = useState(storedDarkMode)

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true)

  useEffect(() => {
    localStorage.setItem('DARK_MODE', darkMode)
  }, [darkMode])

  return (
    <div className='dark-mode' data-theme={darkMode ? 'dark' : 'light'}>
      <button onClick={toggleDarkMode}>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>

      <h1>Hello</h1>
    </div>
  )
}

export default DarkMode
