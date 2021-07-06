export default async function sendMessage({ fullName, email, subject }) {
  await fetch(`/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({ fullName, email, subject }),
    headers: {
      'Content-type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
  })
}
