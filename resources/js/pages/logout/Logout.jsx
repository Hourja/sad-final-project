export default function Logout() {
  const handleClick = async (event) => {
    event.preventDefault()

    const token = localStorage.getItem('my_token')

    const response = await fetch('/api/logout', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        Authorization: `Bearer ${token}`
      }
    })

    const response_data = await response.json()

    // do something with the fact that the user is logged out
  }

  return <button onClick={handleClick}>Logout</button>
}
