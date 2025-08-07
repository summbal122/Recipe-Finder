import { useParams } from "react-router";
import { useSelector } from "react-redux";
import useFetchSearchedRecipes from "../utils/useFetchSearchedRecipes";
import CuisineCard from "./CuisineCard";
import CardShimmer from "./CardShimmer";

const SearchedRecipes = () => {
  const { name: query } = useParams();
  const loading = useFetchSearchedRecipes(query)
  useFetchSearchedRecipes(query);
  const searchedMeals = useSelector((state) => state.search.searchedRecipes);

  return (
    <div className="px-2 md:px-10 py-4 bg-gray-50">
      <div className="mt-20">
      <h1 className="text-xl mb-6 text-gray-700">Search results for: <span className="font-semibold text-dark-primary text-sm">
        {query}</span></h1>
        {loading ? (
          <CardShimmer count={20} />) 
        : 
      (searchedMeals?.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 md:gap-0 md:grid-cols-5 ">
          {searchedMeals.map((meal) => (
            <CuisineCard key={meal.idMeal} cuisine={meal} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found for "<strong>{query}</strong>"</p>
      )) }
    </div>
    </div>
  );
};

export default SearchedRecipes;
