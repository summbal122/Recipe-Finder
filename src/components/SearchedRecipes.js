import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import useFetchSearchedRecipes from "../utils/useFetchSearchedRecipes";
import CuisineCard from "./CuisineCard";

const SearchedRecipes = () => {
  const { name: query } = useParams();
  useFetchSearchedRecipes(query);
  const searchedMeals = useSelector((state) => state.search.searchedRecipes);

  return (
    <div className="mt-24 px-10 py-4">
      <h1 className="text-xl mb-6 text-gray-700">Search results for: <span className="font-semibold text-dark-primary text-sm">
        {query}</span></h1>
      {searchedMeals?.length > 0 ? (
        <div className="grid grid-cols-4 gap-6">
          {searchedMeals.map((meal) => (
            <CuisineCard key={meal.idMeal} cuisine={meal} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found for "<strong>{query}</strong>"</p>
      )}
    </div>
  );
};

export default SearchedRecipes;
