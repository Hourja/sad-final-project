export default async function fetchPhrase(topicId) {
  const url = `/api/table/getPhrases?topicId=${topicId}`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}
