import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

import { FaBolt, FaXTwitter } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-[#003b29] text-white pb-16">
      <div className="container mx-auto px-3 lg:pt-20 pt-8">
        <section>
          <div className="lg:flex items-center justify-between">
            <span className="lg:w-4/5 lg:flex items-center justify-start">
              <button className="lg:w-1/3 flex items-center gap-x-4  text-white">
                <FaBolt className="text-2xl " />
                <p className="text-2xl primary-font">soly.io</p>
              </button>
              <p className="lg:flex justify-center lg:w-1/3 lg:py-0 py-6">
                Architecture with understanding people minds
              </p>
            </span>
            <span className="lg:w-1/3 flex items-center gap-x-8 lg:pb-0 pb-4">
              <p>Get in touch</p>
              <button className="rounded-full px-3 py-2 flex items-center bg-[#fdca51] text-[#003b29] gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p>Contact us</p>
                <IoMdArrowDropright />
              </button>
            </span>
          </div>
          <div className="lg:py-20">
            <ul className="lg:flex items-center justify-between">
              <div className="lg:flex items-center justify-start lg:w-4/5">
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">Home</a>
                </li>
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">Design</a>
                </li>

                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">Work</a>
                </li>
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">Projects</a>
                </li>
              </div>
              <li className="lg:w-1/3 lg:pb-0 pb-3">Follow us </li>
            </ul>
            <ul className="lg:flex items-center justify-between lg:pt-8">
              <div className="lg:flex items-center justify-start lg:w-4/5">
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">About us</a>
                </li>
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">Blog</a>
                </li>
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">Service</a>
                </li>
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">Award</a>
                </li>
              </div>
              <span className="text-white lg:w-1/3 flex items-center gap-4">
                <FaFacebookF className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8" />
                <FaInstagram className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8" />
                <FaYoutube className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8" />
                <FaFacebookF className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8" />
                <FaLinkedin className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8" />
                <FaXTwitter className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8" />
              </span>
            </ul>
          </div>
        </section>
        <section>
          <ul className="sm:flex justify-between pt-8">
            <li>
              <a href="#"> privacy policy™ </a>
            </li>
            <li>
              <a href="#">All rights reserved ®</a>
            </li>
            <li>
              <a href="#">Terms & conditions ®</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
