import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate =useNavigate()

  return (
    <div>
      <div className='w-ful flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={ assets.arrow_left}/>
          <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={ assets.arrow_right}/>
        </div>
      <div className='flex items-center gap-4'>
        <p className=' bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'> Explore premium</p>
        <p className=' bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
        <p className=' bg-green-700 text-black w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'>C</p>
      </div>
      </div>
      <div className=' flex items-center gap-2 mt-4'>
        <p className=' cursor-pointer bg-white text-black px-4 py-1 rounded-2xl'>All</p>
        <p className=' cursor-pointer bg-black px-4 py-1 rounded-2xl'>Music</p>
        <p className=' cursor-pointer bg-black px-4 py-1 rounded-2xl'>Podcast</p>
      </div>
    </div>
  )
}

export default Navbar