export default async function fetchFavorites() {
  const url = `api/phrases/getFavorites`
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}
