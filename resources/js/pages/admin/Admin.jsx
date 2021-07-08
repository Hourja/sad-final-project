import { useState, useContext, useEffect } from 'react'
import Errors from '../../components/Errors'
import UserContext from '../../UserContext'
import NewPhrase from './phrases/newPhrase'
import Topics from './topics/Topics'
import createPhrase from '../../requests/admin/createPhrase'
import TranslationInput from './translation/TranslationInput'
import fetchLanguages from '../../requests/admin/fetchLanguages'

export default function Admin() {
  const { user } = useContext(UserContext)
  const [topics, setTopics] = useState(null)
  const [errors, setErrors] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [languages, setLanguages] = useState(null)

  useEffect(loadLanguages, [])
  async function loadLanguages() {
    setLoaded(false)
    const loadedLanguages = await fetchLanguages()
    setLanguages(loadedLanguages.reduce(groupById, new Map()))

    setLoaded(true)
  }

  const [{ phrase, topic }, setValues] = useState({
    phrase: '',
    topic: ''
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

    const { success, errors } = await createPhrase({ phrase, topic, languages })

    if (!success) {
      return setErrors(errors)
    }
  }

  const onLanguageChange = (languageId, translation) => {
    languages.get(languageId).translation = translation
  }

  return (
    <>
      <h1 className='register-title'>Add a phrase</h1>

      <form className='register' action='' method='post' onSubmit={handleSubmit}>
        <Topics setTopics={setTopics} topics={topics} handleChange={handleChange} />

        <NewPhrase setValues={setValues} phrase={phrase} handleChange={handleChange} />

        {languages
          ? Array.from(languages.values()).map((language, index) => (
              <TranslationInput
                key={index}
                language={language}
                onChange={onLanguageChange}
                value={language.translation}
              />
            ))
          : 'Loading'}

        <button className='register-button'>Add</button>

        <Errors errors={errors} />
      </form>
    </>
  )
}

const groupById = (languagesMap, language) => {
  return languagesMap.set(language.id, language)
}
