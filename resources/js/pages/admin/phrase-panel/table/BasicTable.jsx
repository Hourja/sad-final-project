import './table.scss'
import Row from './Row'
import { useState, useEffect, useMemo } from 'react'
import fetchPhrases from '../../../../requests/admin/fetchPhrases'

export default function BasicTable() {
  const [phrases, setPhrases] = useState(null)

  useEffect(loadedData, [])

  async function loadedData() {
    const loadedPhrases = await fetchPhrases()
    setPhrases(loadedPhrases)
  }

  return (
    <>
      <div>Header</div>
      <div>Name</div>
      <div>Topic</div>
      <div>Action</div>
      {phrases ? phrases.map((phrase, index) => <Row key={index} phrase={phrase} />) : 'Loading'}
    </>
  )
}
