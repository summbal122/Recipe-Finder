import useFetchCategory from '../utils/useFetchCategory'
import { useSelector, useDispatch } from 'react-redux';
import { letters } from '../utils/constants';
import { addCategoryName } from '../utils/categorySlice';
import CuisineCard from "../components/CuisineCard"
import { addSearchLetter } from '../utils/categorySlice';
import useFetchByLetter from '../utils/useFetchByLetter';
import ButtonsShimmer from './ButtonsShimmer';
import { useState } from 'react';
import { useEffect } from 'react';
const Recipes = () => {
  useFetchByLetter();
  useFetchCategory();
  const dispatch = useDispatch();
  const [randomMeal, setRandomMeal] = useState(null);
  const categories = useSelector((store) => store.category.categories)
  const categoryMeals = useSelector((store) => store.category.category)
  const [clicked, setClicked] = useState(false);
  
 const handleCategory = (categoryName)=> {
  dispatch(addCategoryName(categoryName));
  setClicked(true);
};
 const handleLetter = (letter)=> {
  dispatch(addSearchLetter(letter));
  setClicked(true);
};
useEffect(()=> {
  const fetchSingleRecipe = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await res.json();
    const meal = data.meals[0];
    setRandomMeal(meal)
  }
  fetchSingleRecipe();
}, [])


  return (
   <div className="bg-gray-50 flex min-h-screen w-full px-4 pb-10">
    <div>
      {/* Categories */}
    <div className="flex flex-wrap mt-24 mx-auto gap-2 w-9/12"> 
    {categories.length > 0 ? (categories.map((c)=> (
  <button 
    data-testid = "category-button"
    key={c.idCategory}
    onClick={() => handleCategory(c.strCategory)}
    className="bg-white font-semibold px-6 py-2 shadow-md rounded-md hover:cursor-pointer hover:bg-black hover:text-white" >
    {c.strCategory}
  </button> ))
  ) : ( <ButtonsShimmer count = {14}/>)}
    </div>

    <div className='grid grid-cols-12 mt-10 gap-4'> 
   <div className='col-span-10 grid grid-cols-4'> 
    <p className="col-span-4 text-center text-dark-primary/60 tracking-normal text-sm">
    Discover delicious recipes by category or by their starting letter.
    </p>
    {clicked && categoryMeals?.length > 0 ? (
  categoryMeals.map((meal) => (
    <CuisineCard key={meal.idMeal} cuisine={meal} />
  ))
) : (
  randomMeal && <CuisineCard cuisine={randomMeal} />
)}
    </div>
    <div className='col-span-2 flex flex-wrap gap-1 h-100'> 
      {letters.map((l) => (
        <button onClick={() => handleLetter(l.letter)}
         className="bg-white font-semibold py-2 w-14 shadow-md rounded-md hover:cursor-pointer hover:bg-black hover:text-white" 
         key={l.id}>{l.letter}
         </button>
      ) )}
    </div>
    </div>
   </div>
   </div>
  )
}

export default Recipes
