import { useContext } from 'react'
import UserContext from '../../UserContext'
import MD5 from './Md5'
function Gravatar(props) {
  const { user } = useContext(UserContext)
  let src = 'https://www.gravatar.com/avatar/' + MD5(user.email.toLowerCase()) + '?s=' + props.size

  return <img src={src} className='avatar' />
}

export default Gravatar
