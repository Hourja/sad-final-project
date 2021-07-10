export default function TranslationInput({ language, onChange, index, value }) {
  const handleChange = (e) => {
    onChange(index, e.target.value)
  }

  return (
    <div>
      <label htmlFor='name'>
        {language.name}
        <input className='register-input' type='text' onChange={handleChange} value={value} />
      </label>
    </div>
  )
}
