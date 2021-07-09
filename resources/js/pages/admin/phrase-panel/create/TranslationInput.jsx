export default function TranslationInput({ language, onChange, index }) {
  const handleChange = (e) => {
    onChange(index, e.target.value)
  }

  return (
    <div>
      <label htmlFor='name'>
        {language.name}
        <input className='register-input' type='text' onChange={handleChange} />
      </label>
    </div>
  )
}
