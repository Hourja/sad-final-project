export default function Errors({ errors }) {
  return errors ? (
    <ul className='errors'>
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  ) : null
}
