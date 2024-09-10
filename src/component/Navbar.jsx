/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBars, FaGripLines, FaBolt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  // Use a local state to manage the navBar toggle
  const [navBar, setNavBar] = useState(false);

  const handleToggle = () => {
    setNavBar(!navBar);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#003b29]">
      <div className="container mx-auto lg:flex flex-wrap items-center justify-between px-3 border-b border-[#134e3c]">
        <div className="lg:w-1/5 flex justify-between items-center h-[10vh]">
          <a
            href="/"
            className="font-medium tracking-wider transition-colors cursor-pointer"
          >
            <button className="flex items-center gap-x-4 text-white">
              <FaBolt className="text-2xl" />
              <p className="text-2xl primary-font">soliii</p>
            </button>
          </a>
          <button
            className="cursor-pointer text-xl text-white leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
            onClick={handleToggle}
          >
            {navBar ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>

        <div
          className={`lg:flex flex-grow lg:items-center items-baseline justify-center lg:w-4/5 lg:h-auto ${
            navBar ? "flex" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto">
            <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
              <a href="#">Design</a>
            </li>
            <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
              <a href="#">About us</a>
            </li>
            <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
              <a href="#">Projects</a>
            </li>
            <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
              <a href="#">Contact team</a>
            </li>
            <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
              <a href="#">Reviews</a>
            </li>
            <li className="flex items-center py-2 text-white font-medium leading-snug hover:opacity-40 lg:hidden">
              <a href="#">EN</a>
            </li>
            <li className="flex items-center py-2 text-white font-medium leading-snug hover:opacity-40 lg:hidden">
              <FaGripLines className="text-xl" />
            </li>
            <button className="rounded-full px-3 py-2 flex items-center bg-[#fdca51] text-[#003629] gap-2 transition ease-out duration-300 transform hover:scale-110 lg:hidden">
              <p>Contact us</p>
              <IoMdArrowDropdown className="text-xl" />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
