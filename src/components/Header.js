import {cuisines} from '../utils/constants'
import { Link } from 'react-router'
import { handleShowItems } from '../utils/handleStateSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addCuisine } from '../utils/cuisineSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { handleSetQuery } from '../utils/handleStateSlice'
import { clearFavRecipes, removeFavRecipe, setShowFavRecipes } from '../utils/favRecipeSlice'
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const showItems = useSelector((store) => store.handleState.showItems);
   const favRecipes = useSelector((store) => store.favRecipe.favRecipes);
   const showFavRecipes = useSelector((store) => store.favRecipe.showFavRecipes);
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
    <div className='w-full absolute top-14 md:top-3 px-2 md:px-0'>
      <div className='flex flex-col-reverse md:flex-row  xl:gap-8'> 
        <div className='hidden md:block'>
        <div data-testid ="toogle-cuisines" onClick={toggleCuisines} 
         className='ml-4 flex items-center gap-2 hover:cursor-pointer bg-white rounded-lg shadow-md h-16 px-6'>
        <i className="fa-solid fa-bars"></i>
        <h1  className='text-xs xl:text-sm font-thin tracking-widest'>Cuisines</h1>
        </div>
        </div>

          {showItems && ( 
            <ul className='absolute z-20 left-0 -top-14 md:-top-2 bg-white py-6 px-10 space-y-4 md:space-y-2 h-screen overflow-y-scroll shadow-lg'>
               <div className='md:my-3 text-end'>
                <i  onClick={toggleCuisines}  className="fa-solid fa-xmark text-xl -mr-4 hover:cursor-pointer"></i>
              </div>
            {cuisines.map((c) => (
          <li data-testid ="cuisine" onClick={()=> {
            handleCuisine(c.name);
            toggleCuisines();
          }} className='hover:cursor-pointer hover:text-dark-primary text-xs md:text-sm' key={c.id}> 
          <Link to={`/cuisine/${c.name}`}>
         <div>{c.name}</div>
        </Link> </li>
        ))}
        </ul> )}

    <div className='w-full md:w-10/12 xl:w-9/12 grid grid-cols-12 gap-4 xl:gap-10 px-5  xl:px-20 py-2 rounded-sm md:rounded-lg shadow-md bg-white '>
      <div className='col-span-4 md:col-span-2 flex items-center md:justify-between '>

        <div className='block md:hidden'>
        <div data-testid ="toogle-cuisines" onClick={toggleCuisines} 
         className='flex items-center gap-2 hover:cursor-pointer py-1 '>
        <i className="fa-solid fa-bars"></i>
        <h1  className='text-[10px] font-thin tracking-widest'>Cuisines</h1>
        </div>
        </div>
         <Link to="/">
        <img className='w-12 rounded-full hidden md:block' alt="logo" 
        src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg"/>
        </Link>

        {/* mobile screens */}
        <div className='block md:hidden absolute left-0 right-0 -top-12 w-full'>
          <div className='flex w-full gap-2 px-2'>
        <Link to="/">
        <img className='w-12 rounded-full block md:hidden' alt="logo" 
        src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg"/>
        </Link>
         
      <form data-testid ="input-form"  onSubmit={() => {
          handleSearchQuery();
          navigate(`/recipes/${query}`);
          setQuery("");
        }} 
        className='flex w-full h-full  bg-gray-100 rounded-2xl focus-within:outline  focus-within:outline-dark-primary '>
        <input value={query}
         onChange={(e) => setQuery(e.target.value)} 
         className='text-[11px] w-full px-4 outline-none' placeholder='Search For a Recipe' />
         
        <button type='submit'
         className='p-2 hover:cursor-pointer h-full'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      </div>
      </div>
      </div>
      <div className='hidden md:block col-span-7 '>
      <form data-testid ="input-form"  onSubmit={() => {
          handleSearchQuery();
          navigate(`/recipes/${query}`);
          setQuery("");
        }} 
        className='flex w-full h-full  bg-gray-100 rounded-2xl focus-within:outline  focus-within:outline-dark-primary '>
        <input value={query}
         onChange={(e) => setQuery(e.target.value)} 
         className='text-xs xl:text-md w-full px-4 outline-none' placeholder='Search For a Recipe' />
         
        <button type='submit'
         className='p-2 hover:cursor-pointer h-full'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      </div>

      <ul className='flex md:col-span-3 items-center  gap-4 md:gap-3 xl:gap-8 font-thin md:font-thick text-[10px] md:text-xs xl:text-sm '>
        <li data-testid ="nav" className='hover:cursor-pointer hover:text-dark-primary'>About</li>
        <li data-testid ="nav" className='hover:cursor-pointer hover:text-dark-primary'>Contact</li>
        <li data-testid ="nav" className='hover:cursor-pointer hover:text-dark-primary'>Reviews</li>
        <li>
        <i data-testid="fav-recipes" onClick={()=> (
         dispatch(setShowFavRecipes(!showFavRecipes))
        )} className="fa-solid fa-heart text-sm md:text-xl bg-gradient-to-bl from-dark-primary to-light-primary bg-clip-text text-transparent hover:cursor-pointer relative"></i></li>
      </ul>
      {showFavRecipes && ( 
      <div className='bg-white h-96 z-50 text-black md:w-4/12 absolute md:right-0 top-12 right-2 md:top-17 rounded-2xl shadow-xl flex flex-col p-4'>
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
        className='bg-dark-primary text-white px-10 py-1.5 rounded-2xl mt-4 hover:cursor-pointer hover:opacity-90'>
        Clear
     </button>
       )}
      </div>
      )}
    </div>
    </div>
    </div>
  )
}

export default Header
