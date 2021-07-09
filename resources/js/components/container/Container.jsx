import './container.scss'

export default function Container({ children, className = '', fluid = false }) {
  return <div className={`container ${fluid ? '--fluid' : ''} ${className}`}>{children}</div>
}
