export default async function fetchCities(){
    const url = `api/table/cities`
    const resp = await fetch(url)
    const data = await resp.json()

    return data
}