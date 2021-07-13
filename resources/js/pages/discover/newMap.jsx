import { Link, useLocation, useParams } from 'react-router-dom'
export default function Map({ categories }) {
  const { categoryId, city } = useParams()
  const apiKey = ''

  //   url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=formatted_address,geometry,icon,name&locationbias=circle:2000@47.6918452,-122.2226413&

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
