export default async function fetchProfiles() {
  const url = `api/table/profiles`
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}
