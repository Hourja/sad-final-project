import ResetPassword from '../../components/ResetPassword'

export default function ResetPasswordPage() {
  return (
    <div className='login-page' style={{ marginTop: '50px', marginBottom: '50px' }}>
      <h1
        style={{
          marginTop: '50px',
          color: '#5fa1c1',
          textTransform: 'uppercase',
          fontSize: '2rem',
          textDecoration: 'solid',
          fontWeight: 'bold'
        }}
      >
        Forgot you password ?
      </h1>
      <h2 style={{ marginTop: '30px', marginBottom: '30px', fontSize: '20px', textAlign: 'center' }}>
        To reset your password it's necessary type the same email from your registration
      </h2>
      <ResetPassword />
    </div>
  )
}
