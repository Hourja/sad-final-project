import { useParams } from 'react-router'
export default function EditPhrase() {
  const { phraseId } = useParams()

  return (
    <>
      <h1 className='register-title'>Edit a phrase</h1>

      <form className='register' action='' method='post' onSubmit={handleSubmit}>
        <Topics setTopics={setTopics} topics={topics} handleChange={handleChange} />

        <NewPhrase setValues={setValues} phrase={phrase} handleChange={handleChange} />

        <button className='register-button'>Edit</button>

        <Errors errors={errors} />
      </form>
    </>
  )
}
