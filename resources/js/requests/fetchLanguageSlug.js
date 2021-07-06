export default async function fetchTopics(city) {
  const url = `/api/table/getLanguage?citySlug=${city}`

  const resp = await fetch(url)

  const data = await resp.json()

  console.log(data)

  return data
}
