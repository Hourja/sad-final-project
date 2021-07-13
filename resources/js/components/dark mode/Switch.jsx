import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as Moon } from '@fortawesome/free-solid-svg-icons'
import { faSun as Sun } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  padding-right: 50%;
  cursor: pointer;

  @media (min-width: 1200px) {
    padding-right: 15px;
  }
`

const Switch = () => {
  const { dispatch } = useContext(Context)

  const [dark, setDark] = useState(Moon)

  const handleOnClick = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' })
    if (dark == Moon) {
      setDark(Sun)
    } else setDark(Moon)
  }

  return (
    <Container id='dark-button'>
      <FontAwesomeIcon icon={dark} onClick={handleOnClick} size='2x' id='sun' />
    </Container>
  )
}

export default Switch
