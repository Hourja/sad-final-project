import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Category from './Category'

export default function Learn({ categories }) {
  return (
    <div className="category-icons-container">
      {categories.map((category, index) => <Category key={index} category={category} />)}
    </div>
  ) 
  
}
