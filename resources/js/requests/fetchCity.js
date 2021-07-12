export default async function fetchCity({ slug }) {
  const url = `api/table/cities`
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}
