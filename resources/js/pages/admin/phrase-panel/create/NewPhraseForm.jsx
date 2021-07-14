import { useState, useContext, useEffect } from 'react'
import Errors from '../../../../components/Errors'
import NewPhrase from './NewPhrase'
import TopicsList from './TopicsList'
import createPhrase from '../../../../requests/admin/createPhrase'
import TranslationInput from './TranslationInput'
import fetchLanguages from '../../../../requests/admin/fetchLanguages'
import './editPhrase.scss'
import UserContext from '../../../../UserContext'
import { useHistory } from 'react-router-dom'

export default function NewPhraseForm() {
  const history = useHistory()
  const [topics, setTopics] = useState(null)
  const [errors, setErrors] = useState(null)
  const [languages, setLanguages] = useState(null)
  const { token } = useContext(UserContext)

  useEffect(loadLanguages, [])
  async function loadLanguages() {
    const loadedLanguages = await fetchLanguages()
    setLanguages(loadedLanguages)
  }

  const [{ phrase, topic, translations }, setValues] = useState({
    phrase: '',
    topic: '',
    translations: languages ? new Array(languages.length).fill('') : []
  })

  const handleChange = (event) => {
    const allowed_names = ['phrase', 'topic'],
      name = event.target.name,
      value = event.target.value

    if (-1 !== allowed_names.indexOf(name)) {
      setValues((prev_values) => {
        return { ...prev_values, [name]: value }
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (topic === '') {
      return setErrors(['Topic field is required'])
    }
    const { success, errors } = await createPhrase({
      topic,
      phrase,
      translations: languages.map((language, index) => {
        return { language_id: language.id, translation: translations[index], token }
      })
    })

    if (!success) {
      return setErrors(errors)
    }
    setLanguages(languages)
    setValues({
      phrase: '',
      topic: '',
      translations: languages ? new Array(languages.length).fill('') : []
    })
    setLanguages(languages)
    setErrors(['Phrase created successfully !'])
  }

  const onLanguageChange = (index, translation) => {
    translations[index] = translation
    setValues({ phrase, topic, translations })
  }

  return (
    <div className='add-phrase'>
      <button onClick={() => history.goBack()}>Back to Admin</button>
      <h1 className='__register-title'>Add a phrase</h1>

      <form className='__register' action='' method='post' onSubmit={handleSubmit}>
        <TopicsList setTopics={setTopics} topics={topics} handleChange={handleChange} />

        <NewPhrase setValues={setValues} phrase={phrase} handleChange={handleChange} />

        {languages
          ? languages.map((language, index) => (
              <TranslationInput key={index} language={language} index={index} onChange={onLanguageChange} />
            ))
          : 'Loading'}

        <button className='__register-button'>Add</button>

        <Errors errors={errors} />
      </form>
    </div>
  )
}
