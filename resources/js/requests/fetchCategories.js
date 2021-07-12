export default async function fetchCategories(citySlug, token) {
  const url = `/api/${token ? 'my-' : 'table/'}categories?citySlug=${citySlug}`
  const resp = await fetch(url, {
    credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  })
  const data = await resp.json()
  return data
}

//HERE WE WILL NEED TO ADJUSUT THE FETCH TO BRING US ONLY THE CATEGORIES
