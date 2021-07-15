export default async function fetchRecoverPassword({ password, password_confirmation, token, email }) {
  const url = '/api/profile/recover-password'
  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ password, password_confirmation, token, email }),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    })
    // in case of 500 or other kinds of errors
    if (!response.ok && response.status !== 422) {
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
        //object.values take  the values from an object as an array
        // the flat transform an array of arrays into an array.
        errors: Object.values(data.errors).flat()
      }
    }

    return {
      success: true
    }
  } catch (error) {
    //when something goes wrong for instance : internet conection failed
    return {
      success: false,
      errors: ['Sorry, something bad happened!']
    }
  }
}
