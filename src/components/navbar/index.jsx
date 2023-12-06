import React from "react";
import { logo } from "../../assets/images";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navbar, setNavbar ]= React.useState(false)

  const scrollsection = e => {
    // window.scrollTo({
    //   top: e.current.offsetTop,
    //   behavior: 'smooth',
    // })
  }
  navbar?document.body.style.overflow='hidden':document.body.style.overflow=''
  return (
    <nav className="py-[33px]">
      <div className="container flex item-center justify-between text-sm lg:text-lg">
        <div className="min-w-[146px] w-[146px] xl:w-[222px] h-[44px]">
          <img src={logo} alt="logo_image" className="object-cover" />
        </div>
        <div className="hidden xl:block">
          <ul className="flex items-center gap-[20px] lg:gap-[50px]  text-white font-light">
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
        <div className="hidden xl:block">
          <p className="font-medium  text-white">To participate</p>
        </div>

        {/* mobile navbar */}

        <div className="text-white xl:hidden" onClick={()=>setNavbar(true)}>
          <FaBars size={40} />
        </div>
        <ul className={`flex xl:hidden z-10 flex-col shadow-xl shadow-white  absolute transition-all duration-500 ${navbar ? 'right-0 top-0': ' hidden -right-full '} h-screen w-1/2 bg-black pt-[50px] items-center gap-[20px] lg:gap-[50px]  text-white  font-light`}>
          <li >
          <RxCross2 className="text-white  absolute right-4 top-5 text-[20px]" onClick={()=>setNavbar(false)}/>
          </li>
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
        {navbar && <div className="fixed top-0 md:hidden left-0 h-screen w-full bg-black/70" onClick={()=>setNavbar(false)}/>}
      </div>
    </nav>
  );
};

export default Navbar;
