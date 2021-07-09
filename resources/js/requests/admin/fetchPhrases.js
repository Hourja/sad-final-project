export default async function fetchPhrases() {
  const url = `/api/table/phrases`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}
