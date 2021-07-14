import TopicsList from '../create/TopicsList'
import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditPhraseInput from './EditPhraseInput'
import fetchOldValues from '../../../../requests/admin/fetchOldValues'
import TranslationInput from '../create/TranslationInput'
import fetchLanguages from '../../../../requests/admin/fetchLanguages'
import Errors from '../../../../components/Errors'
import editPhrase from '../../../../requests/admin/editPhrase'
import UserContext from '../../../../UserContext'

export default function EditPhrase() {
  const { token } = useContext(UserContext)
  const { phraseId } = useParams()
  const [errors, setErrors] = useState(null)

  const [topics, setTopics] = useState(null)
  const [languages, setLanguages] = useState(null)
  const [{ phrase, topic, translations }, setValues] = useState({
    phrase: '',
    topic: '',
    translations: languages ? new Array(languages.length).fill('') : []
  })

  //RECEIVING ALL AVAILABLE LANGUAGES
  useEffect(loadLanguages, [])
  async function loadLanguages() {
    const loadedLanguages = await fetchLanguages()
    setLanguages(loadedLanguages)
  }

  //RECEIVING OLD VALUES AND ASSIGNING THEM WITH setValues.
  // PROVIDING THE DESTRUCTURED DATA TO OLD THE FIELDS (IN ORDER TO SHOW OLD DATA)
  useEffect(loadOldValues, [])
  async function loadOldValues() {
    const loadedOldValues = await fetchOldValues(phraseId)

    const { name, topic_id, translations } = loadedOldValues
    setValues({
      phrase: name,
      topic: topic_id,
      translations: loadedOldValues ? translations.map((translation) => translation.name) : []
    })
  }

  //HANDLING EVERY CHANGE IN THE INPUIT FIELDS
  const handleChange = (event) => {
    const allowed_names = ['phrase', 'topic'],
      name = event.target.name,
      value = event.target.value

    if (allowed_names.includes(name)) {
      setValues((prev_values) => {
        return { ...prev_values, [name]: value }
      })
    }
  }

  //SUBMITTING FORM

  const handleSubmit = async (event) => {
    event.preventDefault()
    const phraseToSave = {
      topic,
      phrase,
      translations: languages.map((language, index) => {
        return { language_id: language.id, translation: translations[index] }
      })
    }
    const { success, errors } = await editPhrase(phraseId, phraseToSave, token)

    if (!success) {
      return setErrors(errors)
    }

    setErrors(['Saved successfully !'])
  }
  //CONTROLLING THE 3 TRANSLATION INPUT FIELDS FOR ANY CHANGES
  const onLanguageChange = (index, translation) => {
    translations[index] = translation
    setValues({ phrase, topic, translations })
  }

  return (
    <>
      {languages && translations ? (
        <div className='add-phrase'>
          <h1 className='__register-title'>Edit Phrase</h1>
          <form className='__register' action='' method='post' onSubmit={handleSubmit}>
            <TopicsList setTopics={setTopics} topics={topics} handleChange={handleChange} />

            <EditPhraseInput phrase={phrase} handleChange={handleChange} />

            {languages.map((language, index) => (
              <TranslationInput
                key={index}
                language={language}
                index={index}
                onChange={onLanguageChange}
                value={translations[index]}
              />
            ))}
            <button className='__register-button'>Save</button>
            <Errors errors={errors} />
          </form>
        </div>
      ) : (
        'loading'
      )}
    </>
  )
}
