import Category from './Category'

export default function Learn({ categories }) {
  return (
    <div className='category-icons-container'>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  )
}
