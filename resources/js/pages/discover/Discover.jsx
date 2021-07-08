import Category from '../learn/Category'

export default function Discover({ categories }) {
  return (
    <div className='category-icons-container'>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  )
}
