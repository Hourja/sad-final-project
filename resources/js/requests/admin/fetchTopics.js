export default async function fetchTopics() {
  const url = `/api/table/topics`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}
