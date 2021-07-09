export default function TranslationInput({ language, onChange }) {
  const handleChange = (e) => {
    onChange(language.id, e.target.value)
  }

  return (
    <div>
      <label htmlFor='name'>
        {language.name}
        <input className='register-input' type='text' name={language.id} onChange={handleChange} />
      </label>
    </div>
  )
}
