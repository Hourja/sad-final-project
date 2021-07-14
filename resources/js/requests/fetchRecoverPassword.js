export default async function fetchRecoverPassword({ password, password_confirmation, token, email }) {
  const url = '/api/profile/recover-password'
  const resp = await fetch(url, {
    method: 'post',
    body: JSON.stringify({ password, password_confirmation, token, email }),
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
  })
  const data = await resp.json()

  return data
}
