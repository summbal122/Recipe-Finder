import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSearchedRecipes } from "./searchSlice";

const useFetchSearchedRecipes = (query) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    let ignore = false;

    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const json = await response.json();
        if (!ignore) dispatch(setSearchedRecipes(json.meals || []));
      } catch (error) {
        if (!ignore) dispatch(setSearchedRecipes([]));
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchRecipes();

    return () => {
      ignore = true; 
    };
  }, [query, dispatch]);

  return loading;
};

export default useFetchSearchedRecipes;
