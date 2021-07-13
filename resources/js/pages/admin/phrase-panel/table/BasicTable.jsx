import './table.scss'
import Row from './Row'
import { useState, useEffect, useContext, useMemo } from 'react'
import fetchPhrases from '../../../../requests/admin/fetchPhrases'
import { useTable, useSortBy } from 'react-table'
import Table from './Table'

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

  return <>{phrases ? <Table phrases={phrases} /> : 'Loading'}</>
}
