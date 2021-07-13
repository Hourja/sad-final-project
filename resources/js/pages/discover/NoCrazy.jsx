export default function NoCrazy() {
  const click = () => {
    console.log('click')
  }

  return (
    <div onClick={click} style={{ backgroundColor: 'red', width: '50px', height: 'auto' }}>
      I AM A COMPONENT
    </div>
  )
}
