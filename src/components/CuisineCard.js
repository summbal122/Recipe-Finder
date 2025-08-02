const CuisineCard = ({ cuisine }) => {
  return (
    <div className="p-4">
      <div className="rounded-2xl bg-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
        <img
          className="rounded-t-2xl w-full h-48 object-cover"
          src={cuisine.strMealThumb}
          alt={cuisine.strMeal}
        />
        <div className="p-4 text-center">
          <p className="text-lg font-bold text-gray-800">{cuisine.strMeal}</p>
          <button className="mt-3 px-5 py-2 rounded-full text-white text-sm font-medium  bg-orange-800 transition-all duration-200">
            See Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuisineCard;
