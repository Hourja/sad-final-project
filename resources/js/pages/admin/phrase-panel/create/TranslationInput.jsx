export default function TranslationInput({ language, onChange, index, value }) {
  const handleChange = (e) => {
    onChange(index, e.target.value)
  }

  return (
    <div>
      <label htmlFor='name'>
        {language.name}:
        <input
          className='register-input'
          type='text'
          onChange={handleChange}
          value={value}
          style={{ marginLeft: '10px', border: '1px solid #5fa1c1', width: '70%' }}
        />
      </label>
    </div>
  )
}
