export default async function fetchCategories(citySlug) {
    const url = `/api/table/categories?citySlug=${citySlug}`
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}

//HERE WE WILL NEED TO ADJUSUT THE FETCH TO BRING US ONLY THE CATEGORIES