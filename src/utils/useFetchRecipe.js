import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addRecipe } from "./recipeSlice";
const useFetchRecipe = (name) => {
  const dispatch = useDispatch();
    useEffect(() => {
      if (!name) return;
      const fetchRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const json = await response.json();
        dispatch(addRecipe(json.meals?.[0])); 
      };
      fetchRecipe();
    }, [name, dispatch]);
}

export default useFetchRecipe
