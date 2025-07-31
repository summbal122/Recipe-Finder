import React from 'react'
import { Link } from 'react-router'
const Header = () => {
  return (
    <div className='sticky top-0 bg-primary grid grid-cols-12 gap-10 px-20 py-2'>
      <div className='col-span-2'>
        <Link to="/"><img className='w-12 rounded-full' alt="logo" src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg"/></Link>
      </div>
      <div className='flex col-span-7 bg-white rounded-2xl'>
        <input className='w-full border-white p-3 outline-none' placeholder='Search For Recipes' />
        <button className='p-3'><i className="fa-solid fa-magnifying-glass"></i></button>
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
