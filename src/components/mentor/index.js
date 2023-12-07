import React from 'react'
import {user_one, user_two, user_three, user_four} from '../../assets/images'

const Mentor = () => {
  return (
    <div className='mt-[314px]'>
    <div className='container'>
        <p className='text-3xl md:text-[70px] font-semibold text-black mb-[50px]'>Our instructors</p>
        <div className='flex flex-wrap  justify-between'>
          <div className='bg-[#7CFE5B]  animate-pulse h-[56px] w-[56px] lg:h-[136px] lg:w-[136px]  rounded-tl-[16px] rounded-br-[16px] lg:rounded-tl-[50px] translate-y-[-30px] lg:rounded-br-[50px] place-self-end'/>
          <div className='bg-[#C35DF5]  w-[104px] h-[104px] lg:h-[254px] lg:w-[254px] animate-pulse rounded-tl-[50px] rounded-br-[50px] inline-block'><img src={user_one} alt='user_one'/></div>
          <div className='bg-[#7CFE5B]  animate-pulse h-[56px] w-[56px] lg:h-[136px] lg:w-[136px]  rounded-tl-[16px] rounded-br-[16px] lg:rounded-tl-[50px]'/>
          <div className='bg-white w-[104px] h-[104px] lg:h-[254px] lg:w-[254px] animate-pulse  rounded-tl-[50px] rounded-br-[50px] inline-block'><img src={user_two} alt='user_one'/></div>
        </div>
        <div className='flex flex-wrap justify-between lg:pl-[100px] mt-[50px]'>
          <div className='bg-[#C35DF5] animate-pulse animate-plse h-[67px] w-[67px] rounded-tl-[30px] rounded-br-[30px] place-self-end'/>
          <div className='bg-white w-[104px] h-[104px] lg:h-[254px] lg:w-[254px] animate-pulse rounded-tl-[50px] rounded-br-[50px] inline-block '><img src={user_four} alt='user_one'/></div>
          <div className='bg-[#7CFE5B] w-[104px] h-[104px] lg:h-[254px] lg:w-[254px] animate-pulse   rounded-tl-[50px] rounded-br-[50px] inline-block translate-y-[-100px]'><img src={user_three} alt='user_one'/></div>
          <div className='bg-[#C35DF5] w-[104px] h-[104px] animate-pulse lg:h-[254px] lg:w-[254px] rounded-tl-[20px] rounded-br-[20px] lg:rounded-tl-[50px] lg:rounded-br-[50px] place-self-end'/>
          <div className='bg-[#7CFE5B] animate-pulse w-[56px] h-[56px] lg:h-[136px] lg:w-[136px] rounded-tl-[16px] rounded-br-[16px] lg:rounded-tl-[50px] lg:rounded-br-[50px] place-self-end'/>
        </div>
    </div>
    </div>
  )
}

export default Mentor