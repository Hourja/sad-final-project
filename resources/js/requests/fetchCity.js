export default async function fetchCity(slug) {
  const url = `/api/cities/${slug}`
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}
