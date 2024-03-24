/* eslint-disable react/prop-types */
import { IoIosArrowUp, IoMdArrowDropright } from "react-icons/io";
import { FaArrowUp, FaStackOverflow } from "react-icons/fa";
import { MdOfflineBolt } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import { TbVectorBezierCircle } from "react-icons/tb";
import { BiLoaderCircle } from "react-icons/bi";
import Img1 from "../../src/assets/pexels-david-bartus-1509803.jpg";
import Img2 from "../../src/assets/pexels-nubia-navarro-(nubikini)-3221215.jpg";
import Img3 from "../../src/assets/pexels-ben-neale-380337.jpg";

const Projects = () => {
  const Cards = ({ img, title, desc }) => {
    return (
      <div className="lg:pb-0 pb-4 w-full transform transition ease-out duration-300 hover:scale-[1.03]">
        <img src={img} alt="" className="lg:w-full md:w-52 mx-auto" />
        <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
          <span className="text-[#003b29] pt-2">
            <p className="text-xl primary-font font-medium">{title}</p>
            <p>{desc}</p>
          </span>
          <FaArrowUp className="text-2xl rotate-45" />
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-[#fff6ed] lg:py-20 py-8">
      <div className="h-[50px] bg-[#003b29] absolute -bottom-7 -left-[30px] -right-[30px] py-3 rounded-[50%] "></div>
      <div className="xl:w-[1200px] max-w-[75%] mx-auto px-3 pt-8">
        <section className="relative lg:py-0 py-8 ">
          <p className="text-center text-[#fb7a3f]">Our recent works</p>
          <h1 className="text-center text-[#054130] primary-font lg:text-5xl text-xl font-semibold">
            Our completed projects
          </h1>
          <div className="md:flex items-center justify-between lg:pt-20 pt-8 gap-x-16">
            <Cards img={Img3} title={"lorem epsum dolor"} desc={"New Cairo"} />
            <Cards img={Img2} title={"lorem epsum dolor"} desc={"Luxor"} />
            <Cards img={Img1} title={"lorem epsum dolor"} desc={"New Giza"} />
          </div>
          <button className="rounded-full mx-auto mt-12 px-4 py-2 items-center text-sm bg-[#fd7b747] text-white gap-2 transition ease-out duration-300 hover:scale-110 ">
            <p>Load more</p>
            <IoMdArrowDropright className="text-xl" />
          </button>
          {[1, 2, 3, 4].map((_, index) => (
            <IoIosArrowUp
              key={index}
              className="text-[#fb7a3f] text-4xl absolute top-0  left-0 rotate-[315deg]"
            />
          ))}
        </section>
        <section className="flex items-center justify-between mt-24 mb-16 gap-2">
          <span className="flex items-center gap-x-2">
            <MdOfflineBolt className="text-3xl" />
            <p className="font-medium primary-font text-xl">Boltshift</p>
          </span>
          <span className="flex items-center gap-x-2">
            <SiHackthebox className="text-3xl" />
            <p className="font-medium primary-font text-xl">Lightbox</p>
          </span>
          <span className="flex items-center gap-x-2">
            <FaStackOverflow className="text-3xl" />
            <p className="font-medium primary-font text-xl">FeatherDev</p>
          </span>
          <span className="flex items-center gap-x-2">
            <BiLoaderCircle className="text-3xl" />
            <p className="font-medium primary-font text-xl">Spherule</p>
          </span>
          <span className="flex items-center gap-x-2">
            <TbVectorBezierCircle className="text-3xl" />
            <p className="font-medium primary-font text-xl">Nietchzsche</p>
          </span>
        </section>
        <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
          <div className="lg:w-1/2">
            <p className="text-[#fb7a3f]">Our Newsletter</p>
            <h1 className="text-[#054130] primary-font lg:text-4xl text-xl font-semibold pt-4 pb-6">
              Subscribe our daily
              <span className="underline decoration-[#fdca51]">
                {" "}
                Newsletter
              </span>{" "}
              for update
            </h1>
            <p className="text-black leading-8">
              lorem epsum dolor es ma affection ad as as dsa
            </p>
            <div className="relative flex items-center pt-8">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-white rounded-full w-full md:px-6 px-2 h-16 outline-none"
              />
              <button className="absolute md:right-4 right-1 rounded-full md:px-8 flex items-center md:text-sm text-xs bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p>Subscribe</p>
                <IoMdArrowDropright className="text-xl h-12" />
              </button>
            </div>
          </div>
          <div className="lg:py-0 py-8 flex justify-center">
            <img src={Img2} alt="" className="lg:w-100 w-80 " />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
