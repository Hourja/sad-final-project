export default async function fetchUsers() {
  const url = `/api/profile`
  const resp = await fetch(url)
  const data = await resp.json()
  console.log(data)

  return data
}
