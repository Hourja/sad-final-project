import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import './backTopButton.scss'

function BackTopButton() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 50) {
      setVisible(true)
    } else if (scrolled <= 50) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div className='top-button' onClick={scrollToTop}>
      <FontAwesomeIcon
        icon='arrow-up'
        size='2x'
        style={{ display: visible ? 'inline' : 'none' }}
      />
      <p style={{ display: visible ? 'inline' : 'none' }}>Top</p>
    </div>
  )
}
export default BackTopButton;
