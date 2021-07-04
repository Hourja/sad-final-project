import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import fetchCategories from '../../requests/fetchCategories'
import Category from './Category'

export default function Learn() {
  const [categories, setCategories] = useState(null)
  const { city } = useParams()

  useEffect(loadCategories, [])

  async function loadCategories(){
    const loadedCategories = await fetchCategories(city)
    setCategories(loadedCategories)
  }

  if(!categories){
    return 'Loading...'
  }

  return categories.map((category, index) => <Category key={index} category={category} />)
}
