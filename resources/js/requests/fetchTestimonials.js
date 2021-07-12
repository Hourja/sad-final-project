export default async function fetchTestimonials() {
  const url = `/api/testimonials`
  const resp = await fetch(url)
  const data = await resp.json()

  return data
}
