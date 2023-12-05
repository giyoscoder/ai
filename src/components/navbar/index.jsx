import React from "react";
import { logo } from "../../assets/images";
import { Link } from "react-router-dom";

const Navbar = () => {

  const scrollsection = e => {
    // window.scrollTo({
    //   top: e.current.offsetTop,
    //   behavior: 'smooth',
    // })
  }

  return (
    <nav className="py-[33px]">
      <div className="container flex item-center justify-between">
        <div className="w-[222px] h-[44px]">
          <img src={logo} alt="logo_image" className="object-cover" />
        </div>
        <div>
          <ul className="flex items-center gap-[50px] text-lg text-white font-light">
            <li>
              <Link to="#"  onClick={()=>scrollsection('showcase')}>Main</Link>
            </li>
            <li>
              <Link to="#" onClick={()=>scrollsection('mentor')}>Program</Link>
            </li>
            <li>
              <Link to="#" onClick={()=>scrollsection('instructors')}>Our instructors</Link>
            </li>
            <li>
              <Link to="#" >Schedule</Link>
            </li>
            <li>
              <Link to="#" >Reviews</Link>
            </li>
            <li>
              <Link to='#' onClick={()=>scrollsection('contacts')}>Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-lg text-white">To participate</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
