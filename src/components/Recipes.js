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
   <div className="bg-gray-50 flex md:min-h-screen w-full px-2 md:px-4 pb-8 md:pb-10">
    <div>
      {/* Categories */}
    <div className="flex flex-wrap mt-28 md:mt-24 mx-auto gap-1.5 md:gap-2 lg:w-9/12"> 
    {categories.length > 0 ? (categories.map((c)=> (
  <button 
    data-testid = "category-button"
    key={c.idCategory}
    onClick={() => handleCategory(c.strCategory)}
    className="bg-white text-[10px] md:text-sm font-semibold px-4 md:px-6 py-2 shadow-md rounded-md hover:cursor-pointer hover:bg-black hover:text-white" >
    {c.strCategory}
  </button> ))
  ) : ( <ButtonsShimmer count = {14}/>)}
    </div>
     <div className='block md:hidden'>
    <div className='flex flex-wrap gap-1.5 my-3'> 
      {letters.map((l) => (
        <button onClick={() => handleLetter(l.letter)}
         className="bg-white text-xs font-semibold py-2 w-10 shadow-md rounded-md " 
         key={l.id}>{l.letter}
         </button>
      ) )}
    </div>
    </div>

    <div className='flex flex-col gap-4 mt-5 md:mt-10'> 
    <p className=" md:text-sm text-center text-dark-primary/60 tracking-normal text-xs">
    Discover delicious recipes by category or by their starting letter.
    </p>
    <div className='grid grid-cols-12  gap-2  lg:gap-4'>
    <div className='grid col-span-12 md:col-span-9 lg:col-span-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 md:gap-x-6 md:gap-y-5 '>
    {clicked && categoryMeals?.length > 0 ? (
  categoryMeals.map((meal) => (
    <CuisineCard key={meal.idMeal} cuisine={meal} />
  ))
) : (
  randomMeal && <CuisineCard cuisine={randomMeal} />
)}
</div>
    <div className='hidden md:block col-span-3 lg:col-span-2 '>
    <div className='flex flex-wrap gap-2 justify-center'> 
      {letters.map((l) => (
        <button onClick={() => handleLetter(l.letter)}
         className="bg-white text-xs font-semibold py-3 w-14 shadow-md rounded-md hover:cursor-pointer hover:bg-black hover:text-white" 
         key={l.id}>{l.letter}
         </button>
      ) )}
    </div>
    </div>
    </div>
    </div>
   </div>
   </div>
  )
}

export default Recipes
