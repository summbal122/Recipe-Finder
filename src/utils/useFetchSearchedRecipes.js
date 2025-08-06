import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSearchedRecipes } from "./searchSlice"; 
const useFetchSearchedRecipes = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;
    const fetchRecipes = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const json = await response.json();
      dispatch(setSearchedRecipes(json.meals || [])); 
    };

    fetchRecipes();
  }, [query, dispatch]);
};

export default useFetchSearchedRecipes;
