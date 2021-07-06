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
    return {
      success: false,
      errors: ['Sorry, something bad happened!']
    }
  }
}
