import { Link, useLocation, useParams } from 'react-router-dom'
export default function Map({ categories }) {
  const { categoryId, city } = useParams()
  const apiKey = 'AIzaSyCTPsKlX0_d8bIzcVPnmmPBR8fP38m2-Uo'

  const category = categories.find((category) => {
    return category.id === Number(categoryId)
  })

  return (
    <iframe
      width='600'
      height='450'
      loading='lazy'
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/search?key=${apiKey}
    &q=${category.name}+in+${city}&zoom=12`}
    ></iframe>
  )
}
