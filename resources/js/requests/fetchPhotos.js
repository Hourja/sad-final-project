export default async function fetchPhotos(city) {
  const desired = city.replace(/[^\w\s]/gi, ' ')
  const url = `https://api.unsplash.com/search/photos/?query=${desired}&orientation=landscape&page=1&per_page=6&order_by=relevant&client_id=J6DcJfhWAHU8WnvXsVseIe5sLxmWtyfmZtNdxFs52T4`
  const resp = await fetch(url)
  const data = await resp.json()
  return data.results
}
