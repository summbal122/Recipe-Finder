// useFetchCategory.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCategory, addCategories } from "./categorySlice";

const useFetchCategory = () => {
  const dispatch = useDispatch();
  const categoryName = useSelector((store) => store.category.categoryName)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all categories
        const res1 = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data1 = await res1.json();
        dispatch(addCategories(data1.categories));

      
          if (categoryName) {
        const res2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const data2 = await res2.json();
        dispatch(addCategory(data2.meals));
      }} catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryName, dispatch]);
};

export default useFetchCategory;
