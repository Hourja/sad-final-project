export default async function fetchResetPassword(email) {
  const url = '/api/profile/reset-password'
  const resp = await fetch(url, {
    method: 'post',
    body: JSON.stringify({ email }),
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
  })
  const data = await resp.json()

  return data
}
