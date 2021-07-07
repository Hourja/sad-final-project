export async function login({ email, password }) {
  try {
    const response = await fetch('/api/token', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
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

    if (data.message !== 'success') {
      return {
        success: false,
        errors: ['Your credentials are invalid']
      }
    }

    persistToken(data.token)

    return {
      success: true,
      user: data.user,
      token: data.token
    }
  } catch (error) {
    //when something goes wrong for instance : internet conection failed
    return {
      success: false,
      errors: ['Your credentials are invalid']
    }
  }
}

export async function retrieveUser() {
  const persistedToken = localStorage.getItem('token')

  if (!persistedToken) {
    return { success: false }
  }

  try {
    const response = await fetch('/api/user', {
      credentials: 'omit',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        Authorization: `Bearer ${persistedToken}`
      }
    })
    // in case of 500 or other kinds of errors
    if (!response.ok) {
      return {
        success: false
      }
    }
    //data has errors when the validation fails
    const data = await response.json()

    return {
      success: true,
      user: data.user,
      token: persistedToken
    }
  } catch (error) {
    //when something goes wrong for instance : internet conection failed
    return {
      success: false
    }
  }
}

export async function register({ email, name, password, password_confirmation }) {
  try {
    const response = await fetch('/api/new-register', {
      method: 'POST',
      body: JSON.stringify({ email, name, password, password_confirmation }),
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

    if (data.message !== 'success') {
      console.log(data)
      return {
        success: false,
        errors: Object.values(data.errors).flat()
      }
    }

    persistToken(data.token)

    return {
      success: true,
      user: data.user,
      token: data.token
    }
  } catch (error) {
    //when something goes wrong for instance : internet conection failed
    return {
      success: false,
      errors: ['Sorry, something bad happened!']
    }
  }
}

export async function logout() {
  const persistedToken = localStorage.getItem('token')

  if (!persistedToken) {
    return
  }

  localStorage.removeItem('token')
  await fetch('/api/logout', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      Authorization: `Bearer ${persistedToken}`
    }
  })
}

function persistToken(token) {
  localStorage.setItem('token', token)
}
