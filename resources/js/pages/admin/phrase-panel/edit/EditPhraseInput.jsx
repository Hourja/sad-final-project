export default function EditPhraseInput({ handleChange, phrase }) {
  return (
    <label htmlFor='name'>
      Phrase:
      <input
        className='register-input'
        type='text'
        name='phrase'
        value={phrase}
        onChange={handleChange}
        style={{ marginLeft: '10px', border: '1px solid #5fa1c1', width: '70%' }}
      />
    </label>
  )
}
