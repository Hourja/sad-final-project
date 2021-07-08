import { useState, useEffect } from 'react'

export default function TranslationInput({ language, onChange, value }) {
  //   const [translation, setTranslation] = useState('')
  const handleChange = (e) => {
    onChange(language.id, e.target.value)
  }

  return (
    <div>
      <label htmlFor='name'>
        {language.name}
        <input className='register-input' type='text' name={language.id} value={value} onChange={handleChange} />
      </label>
    </div>
  )
}
