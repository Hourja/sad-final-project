export default async function fetchLanguage(city) {
  const url = `/api/table/getLanguage?citySlug=${city}`

  const resp = await fetch(url)

  const data = await resp.json()

  return data.language
}
