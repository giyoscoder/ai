import React from 'react'
import {logo} from '../../assets/images'
import { Link } from 'react-router-dom'
import { FaYoutube, FaFacebookF, FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-[100px]'>
        <div className='container'>
         <div className='flex flex-col  items-center lg:flex-row md:-start  text-center  gap-[50px] lg:gap-0 justify-between'>
         <div>
            <img src={logo} alt='logo' />
          </div>
          <div>
            <ul className='space-y-[20px] text-lg font-light text-white'>
              <li>
                <Link to='#'>Main</Link>
              </li>
              <li>
                <Link to='#'>Program</Link>
              </li>
              <li>
                <Link to='#'>Our instructors</Link>
              </li>
            </ul>
          </div>
          <div>
          <ul className='space-y-[20px] text-lg font-light text-white'>
              <li>
                <Link to='#'>Schedule</Link>
              </li>
              <li>
                <Link to='#'>Reviews</Link>
              </li>
              <li>
                <Link to='#'>Contacts</Link>
              </li>
            </ul>
          </div>
          <div className='order-1 md:order-none'>
            <p className='text-lg font-bold leading-4 tracking-[0.85px] text-white'>We are on social media</p>
            <div className='flex items-center gap-5 text-white mt-5'>
            <FaYoutube  size='22'/>
            <FaFacebookF  size='22'/>
            <FaTwitter size='22' />
            </div>
          </div>
          <div>
            <button className='border border-white py-[12px] px-[20px] rounded-[50px] bg-black text-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-200 '>To participate</button>
          </div>
         </div>
        </div>
    </footer>
  )
}

export default Footer