import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addCuisineList } from "./cuisineSlice";
const useFetchCuisine = (name) => {
  const dispatch = useDispatch();
    useEffect(() => {
      if (!name) return;
      const fetchCuisine = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
        const json = await response.json();
        dispatch(addCuisineList(json.meals));
        console.log("Fetched cuisines:", json.meals);
      };
      fetchCuisine();
    }, [name, dispatch]);
}

export default useFetchCuisine
