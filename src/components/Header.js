import {cuisines} from '../utils/constants'
import { Link } from 'react-router'
import { handleShowItems } from '../utils/handleStateSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addCuisine } from '../utils/cuisineSlice'
import { useState } from 'react'
import { handleSetQuery } from '../utils/handleStateSlice'
import { clearFavRecipes, removeFavRecipe, setShowFavRecipes } from '../utils/favRecipeSlice'
import { clearSetQuery } from '../utils/handleStateSlice'
const Header = () => {
  const dispatch = useDispatch();
   const showItems = useSelector((store) => store.handleState.showItems);
   const favRecipes = useSelector((store) => store.favRecipe.favRecipes);
   const showFavRecipes = useSelector((store) => store.favRecipe.showFavRecipes);
   console.log(favRecipes);
   const [query, setQuery] = useState("")
    const toggleCuisines = () => {
    dispatch(handleShowItems(!showItems));
  };
  const handleCuisine = (name)=> {
    dispatch(addCuisine(name))
  }
  const handleSearchQuery = ()=> {
    dispatch(handleSetQuery(query));
  }
  return (
    <div className='w-full flex justify-center '>
        <div onClick={toggleCuisines}  className='flex items-center absolute top-2 left-6 gap-2 hover:cursor-pointer'>
        <img src='https://cdn-icons-png.flaticon.com/256/561/561611.png' className="w-14"/>
        <h1  className='text-sm font-light tracking-wider'>Cuisines</h1>
        </div>
          {showItems && ( 
            <ul className='absolute z-20 left-0 top-0 bg-white py-6 px-10 space-y-2 h-screen overflow-y-scroll shadow-lg'>
               <div className='my-3 text-end'>
                <i onClick={toggleCuisines}  className="fa-solid fa-xmark text-xl -mr-4 hover:cursor-pointer"></i>
              </div>
              
            {cuisines.map((c) => (
          <li onClick={()=> {
            handleCuisine(c.name);
            toggleCuisines();
          }} className='hover:cursor-pointer hover:text-dark-primary' key={c.id}> 
          <Link to={`/cuisine/${c.name}`}>
         <div>{c.name}</div>
        </Link> </li>
        ))}
        </ul> )}

    <div className='absolute top-2 w-9/12 grid grid-cols-12 gap-10 px-20 py-2 rounded-lg shadow-md bg-white '>
      <div className='col-span-2 flex items-center justify-between'>
        <Link to="/"><img className='w-12 rounded-full' alt="logo" src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg"/></Link>
      </div>
      <div className='flex col-span-7 bg-gray-100 rounded-2xl focus-within:outline  focus-within:outline-dark-primary'>
        <input value={query}
         onChange={(e) => setQuery(e.target.value)} 
         className='w-full  px-4 outline-none' placeholder='Search For a Recipe' />
         <Link to={`/recipes/${query}`}>
        <button onClick={() => {
          handleSearchQuery();
          setQuery("");

        }}
         className='p-2 hover:cursor-pointer h-full'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </Link>
      </div>
      <ul className='flex col-span-3 items-center gap-8 font-thick text-sm '>
        <li className='hover:cursor-pointer hover:text-dark-primary'>About</li>
        <li className='hover:cursor-pointer hover:text-dark-primary'>Contact</li>
        <li className='hover:cursor-pointer hover:text-dark-primary'>Reviews</li>
        <li><i onClick={()=> (
         dispatch(setShowFavRecipes(!showFavRecipes))
        )} className="fa-solid fa-heart text-xl bg-gradient-to-bl from-dark-primary to-light-primary bg-clip-text text-transparent hover:cursor-pointer relative"></i></li>
      </ul>
      {showFavRecipes && ( 
      <div className='bg-white h-96 z-50 text-black w-4/12 absolute right-0 top-17 rounded-2xl shadow-xl flex flex-col p-4'>
      {favRecipes.length > 0 ? (
           <div className='h-80 w-full overflow-y-scroll space-y-2 '>
      {
      favRecipes.map((recipe) => (
           <div key = {recipe.idMeal} className='flex gap-2 items-center  justify-between border-b border-gray-200 p-2'>
            <Link to={`/recipe/${recipe.strMeal}`}> 
            <div className='flex items-center w-full gap-2' >
           <img className='w-12 rounded-sm' src={recipe.strMealThumb}/>
          <h1 className='text-sm'>{recipe.strMeal}</h1>
           </div>
              </Link>
          <i onClick={()=> (
            dispatch(removeFavRecipe(recipe.idMeal) )
            )} className="ml-2 mr-4 fa-solid fa-trash text-dark-primary hover:cursor-pointer"></i>
       </div>
      ) )}
      </div>
      ) : (
      <p className= "text-gray-400 text-sm my-auto tracking-wide mx-auto font-thin ">No favourites added</p>
      )}
      {favRecipes.length > 0 && (
          <button onClick={()=> (
        dispatch(clearFavRecipes()) )} 
        className='bg-dark-primary text-white px-10 py-1 rounded-2xl mt-4 hover:cursor-pointer hover:opacity-90'>
        Clear
     </button>
       )}
      </div>
      )}
    </div>
    </div>
  )
}

export default Header
