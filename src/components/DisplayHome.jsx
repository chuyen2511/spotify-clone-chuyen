import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './Albumitem'
import { songsData } from '../assets/assets'
import SongData from './SongData'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div mb-4>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className=' flex overflow-auto'>
        {albumsData.map((item,index)=>( <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
      </div>
      </div>
      <div mb-4>
      <h1 className='my-5 font-bold text-2xl'>Today Hit</h1>
      <div className=' flex overflow-auto'>
        {songsData.map((item,index)=>( <SongData key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
      </div>
      </div>
    </>
  )
}

export default DisplayHome