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
  }
  return (
    <div className='w-full flex justify-center '>
        <div onClick={toggleCuisines}  className='flex items-center absolute top-2 left-6 gap-2 hover:cursor-pointer'>
        <img src='https://cdn-icons-png.flaticon.com/256/561/561611.png' className="w-14"/>
        <h1  className='text-sm font-light tracking-wider'>Cuisines</h1>
        </div>
          {showItems && ( 
            <ul className='absolute z-20 left-0 top-0 bg-white py-6 px-10 space-y-2 h-screen overflow-y-scroll shadow-lg'>
               <div className='flex justify-between items-center mb-5'>
              <span className='text-dark-primary text-sm'>Cuisines</span>
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
         <Link to={`/recipe/${query}`}>
        <button onClick={handleSearchQuery}
         className='p-2 hover:cursor-pointer h-full'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </Link>
      </div>
      <ul className='flex col-span-3 items-center gap-8 font-thick text-sm '>
        <li className='hover:cursor-pointer hover:text-dark-primary'>About</li>
        <li className='hover:cursor-pointer hover:text-dark-primary'>Contact</li>
        <li className='hover:cursor-pointer hover:text-dark-primary'>Reviews</li>
        <li><i className="fa-solid fa-heart text-xl bg-gradient-to-bl from-dark-primary to-light-primary bg-clip-text text-transparent hover:cursor-pointer"></i></li>
      </ul>
    </div>
    </div>
  )
}

export default Header
