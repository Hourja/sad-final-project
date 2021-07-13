export default async function fetchUsers() {
    const url = `/api/table/users`
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data);
  
    return data
  }
  