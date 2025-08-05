const CardShimmer = ({count = 8}) => {
  return (
    <div className='grid grid-cols-5 gap-4 mt-20'>
    {[...Array(count)].map((_, i) => (
         <div className="relative rounded-2xl h-80 bg-gray-100"
         key={i}>
        <img
          className="rounded-t-2xl w-full h-44"
         />
        <div className="flex justify-center">
          <p className="w-40 h-6 mt-2 bg-white rounded-2xl"></p>
          <button className="absolute bottom-5 w-24 h-6 rounded-full bg-white">
          </button>
        </div>
     </div>
    ))}
    </div>
 
  )
}

export default CardShimmer
