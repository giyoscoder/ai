import React from "react";
import { logo2 } from "../../assets/images";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);


  navbar
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
  return (
    <nav id="main" >
      <div className="bg-white fixed top-0 left-0 w-full z-40">
        <div className="container flex item-center text-black justify-between md:justify-stretch md:gap-[400px] text-sm lg:text-lg">
          <div className="min-w-[146px] bg-black  w-[146px] xl:w-[222px] h-[44px]">
            <img src={logo2} alt="logo_image" className="object-cover" />
          </div>
          <div className="hidden xl:block">
            <ul className="flex items-center gap-[20px] lg:gap-[50px] py-[60px]  font-light">
              <li className="cursor-pointer">
                <Link to="main" spy={true} smooth={true} offset={-150}>
                  Main
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="mentor" spy={true} smooth={true} offset={-150}>
                  Program
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="contacts" spy={true} smooth={true}  offset={-150}
>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile navbar */}

          <div
            className="text-black py-[35px] xl:hidden"
            onClick={() => setNavbar(true)}
          >
            <FaBars size={30} />
          </div>
          <ul
            className={`flex xl:hidden z-10 flex-col shadow-xl shadow-white  absolute transition-all duration-500 ${
              navbar ? "right-0 top-0" : " hidden -right-full "
            } h-screen w-1/2 bg-black pt-[50px] items-center gap-[20px] lg:gap-[50px]  text-white  font-light`}
          >
            <li>
              <RxCross2
                className="text-white  absolute right-4 top-5 text-[20px]"
                onClick={() => setNavbar(false)}
              />
            </li>
            <li>
              <Link
                to={"main"}
                onClick={() => setNavbar(false)}
                spy={true}
                offset={-150}
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                to={"mentor"}
                onClick={() => setNavbar(false)}
                spy={true}
                smooth={true}
                offset={-150}
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                to={"contacts"}
                onClick={() => setNavbar(false)}
                spy={true}
                smooth={true}
                offset={-150}
              >
                Contacts
              </Link>
            </li>
          </ul>
          {navbar && (
            <div
              className="fixed top-0 md:hidden left-0 h-screen w-full bg-black/70"
              onClick={() => setNavbar(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
