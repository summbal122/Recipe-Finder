import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSearchedRecipes } from "./searchSlice";

const useFetchSearchedRecipes = (query) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (!query) return;
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const json = await response.json();
        dispatch(setSearchedRecipes(json.meals || []));
      } catch (error) {
        dispatch(setSearchedRecipes([]));
      } finally {
        setLoading(false); 
      }
    };

    fetchRecipes();
  }, [query, dispatch]);

  return loading; 
};

export default useFetchSearchedRecipes;
