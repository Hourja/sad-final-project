import './table.scss'
import Row from './Row'
import { useState, useEffect, useContext } from 'react'
import fetchPhrases from '../../../../requests/admin/fetchPhrases'

import UserContext from '../../../../UserContext'

export default function BasicTable() {
  const [phrases, setPhrases] = useState(null)
  const { token } = useContext(UserContext)
  const [update, setUpdate] = useState(true)

  useEffect(loadedData, [update])

  async function loadedData() {
    const loadedPhrases = await fetchPhrases(token)
    setPhrases(loadedPhrases)
  }

  return (
    <>
      <div>Header</div>
      <div>Name</div>
      <div>Topic</div>
      <div>Action</div>
      {phrases
        ? phrases.map((phrase, index) => <Row key={index} phrase={phrase} setUpdate={setUpdate} update={update} />)
        : 'Loading'}
    </>
  )
}
