import { useState, useContext, useEffect } from 'react'
import Errors from '../../../../components/Errors'
import NewPhrase from './PhraseInput'
import Topics from './TopicsList'
import createPhrase from '../../../../requests/admin/createPhrase'
import TranslationInput from './TranslationInput'
import fetchLanguages from '../../../../requests/admin/fetchLanguages'

export default function NewPhraseForm() {
  const [topics, setTopics] = useState(null)
  const [errors, setErrors] = useState(null)
  const [languages, setLanguages] = useState(null)

  useEffect(loadLanguages, [])
  async function loadLanguages() {
    const loadedLanguages = await fetchLanguages()
    // The reduce() method executes a reducer function (groupById) (that you provide) on each element of the array, resulting in a single output value.
    setLanguages(loadedLanguages.reduce(groupById, new Map()))
  }

  const [{ phrase, topic }, setValues] = useState({
    phrase: '',
    topic: ''
  })

  const handleChange = (event) => {
    const allowed_names = ['phrase'],
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
              <TranslationInput key={index} language={language} onChange={onLanguageChange} />
            ))
          : 'Loading'}

        <button className='register-button'>Add</button>

        <Errors errors={errors} />
      </form>
    </>
  )
}

// from reduce function  the second arg is the new Map that we are going to use
const groupById = (languagesMap, language) => {
  return languagesMap.set(language.id, language)
}
