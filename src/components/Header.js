import {cuisines} from '../utils/constants'
import { Link } from 'react-router'
import { handleShowItems } from '../utils/handleStateSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addCuisine } from '../utils/cuisineSlice'
import { useState } from 'react'
import { handleSetQuery } from '../utils/handleStateSlice'
const Header = () => {
  const dispatch = useDispatch();
   const showItems = useSelector((store) => store.handleState.showItems);
   const [query, setQuery] = useState("")
    const toggleCuisines = () => {
    dispatch(handleShowItems(!showItems));
  };
  const handleCuisine = (name)=> {
    dispatch(addCuisine(name))
  }
  const handleSearchQuery = ()=> {
    dispatch(handleSetQuery(query));
    console.log(query);
  }
  return (
    <div className='absolute top-0 w-full bg-primary grid grid-cols-12 gap-10 px-20 py-2 h-20'>
      <div className='col-span-2 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
        <i onClick={toggleCuisines} className="fa-solid fa-bars hover:cursor-pointer text-2xl"></i>
        <h1  className=' font-semibold'>Cuisines</h1>
        </div>
          {showItems && ( 
            <ul className='absolute z-20 left-0 top-0 bg-white py-6 px-10 space-y-2 h-screen overflow-y-scroll'>
              <div className='text-end'>
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
       
        <Link to="/"><img className='w-12 rounded-full' alt="logo" src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg"/></Link>
      </div>
      <div className='flex col-span-7 bg-white rounded-2xl'>
        <input value={query}
         onChange={(e) => setQuery(e.target.value)} 
         className='w-full border-white px-4 outline-none' placeholder='Search For a Recipe' />
         <Link to={`/recipe/${query}`}>
        <button onClick={handleSearchQuery}
         className='p-3 hover:cursor-pointer h-full'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </Link>
      </div>
      <ul className='text-secondary flex col-span-3 items-center gap-8 font-semibold'>
        <li>About</li>
        <li>Contact</li>
        <li>Reviews</li>
      </ul>
    </div>
  )
}

export default Header
