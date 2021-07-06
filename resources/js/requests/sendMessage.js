export default async function sendMessage({ fullName, email, subject }) {
  try {
    const response = await fetch(`/api/sendMessage`, {
      method: 'POST',
      body: JSON.stringify({ fullName, email, subject }),
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
