import useFetchCategory from '../utils/useFetchCategory'
import { useSelector, useDispatch } from 'react-redux';
import { letters } from '../utils/constants';
import { addCategoryName } from '../utils/categorySlice';
import CuisineCard from "../components/CuisineCard"
import { addSearchLetter } from '../utils/categorySlice';
import useFetchByLetter from '../utils/useFetchByLetter';
import { Link } from 'react-router';
const Recipes = () => {
  const dispatch = useDispatch();
  useFetchCategory();
  const categories = useSelector((store) => store.category.categories)
  const categoryMeals = useSelector((store) => store.category.category)
  const letterMeals = useSelector((store) => store.category.letterRecipes)
  console.log(categoryMeals);
  console.log(categories);
  useFetchByLetter();

 const handleCategory = (categoryName)=> {
  dispatch(addCategoryName(categoryName));
  console.log(categoryName);
};

 const handleLetter = (letter)=> {
  dispatch(addSearchLetter(letter));
  console.log(letter);
};

  return (
   <div className = "mt-20 flex min-h-screen w-full px-4">
    <div>
    <div className="flex flex-wrap mx-auto gap-2 w-9/12 mt-6"> 
    {categories.map((c)=> (
  <button 
    key={c.idCategory}
    onClick={() => handleCategory(c.strCategory)}
    className="bg-white font-semibold px-6 py-2 shadow-md rounded-md hover:cursor-pointer hover:bg-black hover:text-white"
  >
    {c.strCategory}
  </button>
))}
    </div>
    <div className='grid grid-cols-12 mt-10 gap-4'> 
   <div className='col-span-10 grid grid-cols-4'> 
  {categoryMeals?.length > 0 ? (
    categoryMeals.map((meal) => (
      <Link key={meal.idMeal}  to={`/recipe/${meal.strMeal}`}>
      <CuisineCard key={meal.idMeal} cuisine={meal} /> </Link>
    ))
  ) : letterMeals?.length > 0 ? (
    letterMeals.map((meal) => (
       <Link key={meal.idMeal}  to={`/recipe/${meal.strMeal}`}>
      <CuisineCard cuisine={meal} /> </Link>
    ))
  ) : (
    <p className="col-span-4 text-center text-gray-500">No meals found.</p>
  )}
</div>
    <div className='col-span-2 flex flex-wrap gap-1 h-100'> 
      {letters.map((l) => (
        <button onClick={() => handleLetter(l.letter)}
         className="bg-white font-semibold py-2 w-14 shadow-md rounded-md hover:cursor-pointer hover:bg-black hover:text-white" key={l.id}>{l.letter}</button>
      ) )}

    </div>
    </div>

   </div>
   </div>
  )
}

export default Recipes
