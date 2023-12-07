import React from 'react'
import {logo2} from '../../assets/images'
import { Link } from 'react-scroll'
import {  FaTelegram , FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-[100px]'>
        <div className='container'>
         <div className='flex flex-col  items-center lg:flex-row md:-start  text-center  gap-[50px] lg:gap-0 justify-between'>
         <div>
            <img src={logo2} alt='logo' className='w-[222px] '/>
          </div>
          <div>
            <ul className='space-y-[20px] text-lg  font-light text-black'>
              <li>
                <Link  to='main' spy={true} smooth={true} >Main</Link>
              </li>
              <li>
                <Link  to='main' spy={true} smooth={true} >Program</Link>
              </li>
              <li>
                <Link  to='main' spy={true} smooth={true} >Our instructors</Link>
              </li>
            </ul>
          </div>
         
          <div className='order-1 md:order-none'>
            <p className='text-lg font-bold leading-4 tracking-[0.85px] text-black'>We are on social media</p>
            <div className='flex items-center gap-5 text-black mt-5'>
            <FaInstagram   size='22'/>
            <FaTelegram  size='22'/>
            </div>
          </div>
        
         </div>
        </div>
    </footer>
  )
}

export default Footer