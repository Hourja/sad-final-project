import { Link, useLocation, useParams } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'

export default function Map({ categories }) {
  const { categoryId, city } = useParams()
  const apiKey = ''

  const category = categories.find((category) => {
    return category.id === Number(categoryId)
  })

  return (
    <></>
    // <iframe

    //   src={`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=`}
    // ></iframe>

    //   src='https://www.google.com/maps/d/u/0/embed?mid=1HxlZkQPS7UNKW7fVds2CsBx4HPjYeoCb'
    //   width='640'
    //   height='480'
    // ></iframe>
    // <iframe src="https://www.google.com/maps/d/embed?mid=1z05obk7Met3hFcnQq4RPLqNYqD6r0ZSh&hl=en_US" width="640" height="480"></iframe>
  )
}
