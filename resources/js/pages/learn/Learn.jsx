import { useState, useEffect } from 'react'
import Category from './Category'

export default function Learn() {
  const [categories, setCategories] = useState('')

  //HERE WE WILL NEED TO ADJUSUT THE FETCH TO BRING US ONLY THE CATEGORIES
  async function fetchCategories() {
    const url = `http://localhost:3000/api/table/categories`
    const resp = await fetch(url)
    const data = await resp.json()
    setCategories(data)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <>{categories ? categories.map((category, index) => <Category key={index} category={category} />) : 'Loading'}</>
  )
}
