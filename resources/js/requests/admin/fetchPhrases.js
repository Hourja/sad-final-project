export default async function fetchPhrases(token) {
  const url = `/api/phrases`
  const resp = await fetch(url, {
    credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      Authorization: `Bearer ${token}`
    }
  })
  const data = await resp.json()
  return data
}
