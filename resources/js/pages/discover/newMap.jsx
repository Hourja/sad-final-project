import { Link, useLocation, useParams } from 'react-router-dom'

export default function NewMap({ categories }) {
  const { categoryId, city } = useParams()
  const apiKey = ''

  const category = categories.find((category) => {
    return category.id === Number(categoryId)
  })
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${category.name}%20in%20${city}&inputtype=textquery&fields=formatted_address,geometry,icon,name&locationbias=circle:2000@47.6918452,-122.2226413&key=${apiKey}`

  console.log(url)
  return <iframe width='600' height='450' loading='lazy' allowFullScreen src={url}></iframe>
}
