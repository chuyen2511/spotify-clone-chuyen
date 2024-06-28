import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    
      <div className=' w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className=' bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-4 cursor-pointer'>
          <img className='w-4' src={assets.home_icon}/>
          <p className='font-bold text-[15px]'>Trang chủ </p>
        </div>
        <div className='flex items-center gap-3 pl-4 cursor-pointer hover:font-medium hover:underline transition-all duration-200 ease-in-out'>
          <img className='w-4' src={assets.search_icon}/>
          <p className=' text-[15px] '>Tìm kiếm </p>
        </div>
      </div>
      <div className=' bg-[#121212] h-[85%] rounded'>
        <div className='flex items-center justify-between px-4 py-4'>
          <div className='flex items-center gap-3'>
            <img className='w-4' src={assets.stack_icon}/>
            <p>Thư viện</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon}/>
            <img className='w-5' src={assets.plus_icon}/>
          </div>
        </div>
        <div className=' p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4' >
          <h1>Tạo danh sách phát đầu tiên của bạn</h1>
          <p className='font-light'>Rất dễ! Chúng tôi sẽ giúp bạn</p>
          <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4' >Tạo danh sách phát</button>
        </div>
        <div className=' p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4' >
          <h1>Hãy cùng tìm và theo dõi một số podcast</h1>
          <p className='font-light'>Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới</p>
          <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4' >Duyệt xem podcast</button>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar