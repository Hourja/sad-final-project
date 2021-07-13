import './table.scss'
import { useState, useEffect, useContext } from 'react'
import fetchPhrases from '../../../../requests/admin/fetchPhrases'
import Table from './Table'
import UserContext from '../../../../UserContext'

export default function BasicTable() {
  const [phrases, setPhrases] = useState(null)
  const { token } = useContext(UserContext)

  useEffect(loadedData, [])

  async function loadedData() {
    const loadedPhrases = await fetchPhrases(token)
    setPhrases(loadedPhrases)
  }

  return <>{phrases ? <Table phrases={phrases} /> : 'Loading'}</>
}
