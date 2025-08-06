import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addFavRecipe } from "../utils/favRecipeSlice";
import { setFavAdded } from "../utils/favRecipeSlice";
const CuisineCard = ({ cuisine }) => {
  const dispatch = useDispatch();
  const handleFavRecipe = (cuisine) => {
   console.log(cuisine);
   dispatch(addFavRecipe(cuisine))
   dispatch(setFavAdded(true))
  }
  return (
    <div className="p-4">
      <div className=" relative rounded-2xl h-80 bg-dark-primary/10 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
        <img
          className="relative rounded-t-2xl w-full h-44 object-cover"
          src={cuisine.strMealThumb}
          alt={cuisine.strMeal} />
          <i onClick={(()=> handleFavRecipe(cuisine))} className="absolute  top-2 right-2 fa-solid fa-heart text-shadow-lg  text-gray-50 text-2xl hover:bg-gradient-to-bl hover:from-dark-primary hover:to-light-primary hover:bg-clip-text hover:text-transparent hover:cursor-pointer "></i>
        <div className="p-3 text-center flex justify-center">
          <p className="text-md font-thick tracking-wide leading-5 text-gray-800">{cuisine.strMeal}</p>
          <div className="absolute bottom-5 mt-3 w-full space-x-3">
            <Link to={`/recipe/${cuisine.strMeal}`}>
          <button className="px-5 py-2 rounded-full text-black text-sm font-medium bg-white transition-all duration-200 hover:cursor-pointer hover:bg-black hover:text-white">
            See Recipe
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CuisineCard;
