export default async function fetchLanguages() {
  const url = `/api/table/languages`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}
