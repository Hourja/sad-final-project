export default function NewPhrase({ handleChange, phrase }) {
  return (
    <label htmlFor='name'>
      Phrase:
      <input className='register-input' type='text' name='phrase' value={phrase} onChange={handleChange} />
    </label>
  )
}
