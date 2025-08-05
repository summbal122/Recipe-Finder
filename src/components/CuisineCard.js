const CuisineCard = ({ cuisine }) => {
  return (
    <div className="p-4">
      <div className=" relative rounded-2xl h-80 bg-dark-primary/10 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
        <img
          className="rounded-t-2xl w-full h-44 object-cover"
          src={cuisine.strMealThumb}
          alt={cuisine.strMeal} />
        <div className="p-3 text-center flex justify-center">
          <p className="text-md font-thick tracking-wide leading-5 text-gray-800">{cuisine.strMeal}</p>
          <button className="absolute bottom-5 mt-3 px-5 py-2 rounded-full text-black text-sm font-medium bg-white transition-all duration-200 hover:cursor-pointer hover:bg-black hover:text-white">
            See Recipe
          </button>
        </div>
      </div>
    </div>
  )
};

export default CuisineCard;
