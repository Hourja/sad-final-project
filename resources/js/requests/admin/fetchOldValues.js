export default async function fetchOldValues(id) {
  const url = `/api/table/getPrevious?phraseId=${id}`
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}
