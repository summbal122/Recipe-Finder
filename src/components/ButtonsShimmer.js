const ButtonsShimmer = ({count = 14}) => {
  return (
    <div className='flex flex-wrap gap-2'>
    {[...Array(count)].map((_, i) => (
      <button className="bg-gray-100 w-24 h-10  px-6 py-2 shadow-md rounded-md" key={i}></button>
    ))}
    </div>
  )
}

export default ButtonsShimmer
