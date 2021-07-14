export default async function createPhrase({ translations, phrase, topic }, token) {
  try {
    const response = await fetch('/api/phrase/new', {
      method: 'POST',
      body: JSON.stringify({ translations, phrase, topic }),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        Authorization: `Bearer ${token}`
      }
    })

    // in case of 500 or other kinds of errors
    if (!response.ok) {
      return {
        success: false,
        errors: ['Sorry, something bad happened!']
      }
    }
    //data has errors when the validation fails
    const data = await response.json()

    if (data.errors) {
      return {
        success: false,
        errors: Object.values(data.errors).flat()
      }
    }

    if (data.message === 'success') {
      return { success: true, errors: false }
    }
  } catch (error) {
    //when something goes wrong for instance : internet conection failed
    return {
      success: false,
      errors: ['Something went wrong']
    }
  }
}
