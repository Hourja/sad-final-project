import { useContext } from 'react'
import UserContext from '../../UserContext'
import MD5 from './Md5'
function Gravatar() {
  const { user } = useContext(UserContext)
  let src = 'https://www.gravatar.com/avatar/' + MD5(user.email.toLowerCase()) + '?s=200'

  return (
    <figure>
      <img src={src} className='avatar' />
    </figure>
  )
}

export default Gravatar
