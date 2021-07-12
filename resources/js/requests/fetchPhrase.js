export default async function fetchPhrase(topicId) {
  const url = `/api/table/getPhrases?topicId=${topicId}`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

export async function fetchMyPhrases(categoryId, token) {
  const url = `/api/categories/${categoryId}/my-phrases`
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
