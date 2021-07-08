export default async function fetchPhrases(topicId) {
  const url = `/api/table/getPhrases?topicId=${topicId}`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}
