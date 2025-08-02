import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLetterRecipes } from "./categorySlice";

const useFetchByLetter = () => {
  const letter = useSelector((store) => store.category.searchLetter);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLetterRecipes = async () => {
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
      const json = await data.json();
      dispatch(addLetterRecipes(json.meals || []));
    };
    if (letter) fetchLetterRecipes();
  }, [letter, dispatch]);
};

export default useFetchByLetter;
