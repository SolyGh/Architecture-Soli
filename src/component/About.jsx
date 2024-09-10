import { PiDiamondsFourFill } from "react-icons/pi";
import { BiSolidTreeAlt } from "react-icons/bi";
import { SiLinktree } from "react-icons/si";
import { IoConstructSharp } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Image1 from "../../src/assets/5.jpg";

const About = () => {
  return (
    <div className="relative overflow-hidden bg-[#fff6ed] lg:py-20 py-8">
      <div className="h-[50px] bg-[#003629] absolute -bottom-7 -left-[30px]-right-[30px] py-3 px-[30px] rounded-[50%]"></div>

      <div className="xl:w-[1200px] mx-auto px-3 pt-8">
        <section className="relative">
          <p className="text-center text-[#fb7a3f]">What we do</p>
          <h1 className="text-center text-[#054130] lg:text-5xl text-xl primary-font">
            Bringing new life to <br /> old{""}
            <span className="underline decoration-[#fdca51]"> processes</span>
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-8">
            <span className="bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
              <PiDiamondsFourFill FourFill className="text-5xl" />
              <p className="text-xl text-[#054130] primary-font font-semibold py-8 pb-4">
                Interior design
              </p>{" "}
              <p className="text-black">
                Interior design is the art and science of enhancing
              </p>
            </span>{" "}
            <span className="bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
              <IoConstructSharp FourFill className="text-5xl" />
              <p className="text-xl text-[#054130] primary-font font-semibold py-8 pb-4">
                Construction
              </p>{" "}
              <p className="text-black">
                The technique , procedure , and materials used during.
              </p>
            </span>{" "}
            <span className="bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
              <SiLinktree FourFill className="text-5xl" />
              <p className="text-xl text-[#054130] primary-font font-semibold py-8 pb-4">
                Decoration
              </p>{" "}
              <p className="text-black">lorem epsum dolor, est .</p>
            </span>{" "}
            <span className="bg-[#fffaf4] py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
              <BiSolidTreeAlt className="text-5xl" />
              <p className="text-xl text-[#054130] primary-font font-semibold py-8 pb-4">
                Architectural
              </p>{" "}
              <p className="text-black">lorem epsum dolor, est .</p>
            </span>{" "}
          </div>
          git remot
        </section>
        <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
          <div className="flex justify-center lg:w-1/2">
            <img
              src={Image1}
              alt="Architectural Journey"
              className="lg:w-96 w-80 transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="lg:w-1/2 lg:py-0 py-20 space-y-6">
            <p className="text-[#fb7a3f] text-lg tracking-wider">
              Our Architects Journey
            </p>
            <h1 className="text-[#054130] lg:text-5xl text-3xl primary-font font-semibold pt-4 pb-6 leading-tight">
              Beautiful Acoustics &{" "}
              <span className="underline decoration-[#fdca51]">
                Achievements
              </span>
            </h1>
            <p className="text-black leading-8 text-lg">
              Studying architecture is demanding and is rated as one of the most
              challenging courses at the university. It requires long hours,
              commitment, and a seven-year study period.
            </p>
            <div className="flex items-center lg:gap-x-8 gap-4 py-8">
              <button className="rounded-full px-6 py-3 flex items-center text-sm bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110 hover:bg-[#e76934] shadow-lg">
                <p>Read More</p>
                <IoMdArrowDropright className="text-xl" />
              </button>
              <button className="rounded-full px-6 py-3 flex items-center text-sm bg-white text-[#fd7b47] gap-2 transition ease-out duration-300 transform hover:scale-110 hover:bg-[#f5f5f5] shadow-lg">
                <p>View Projects</p>
                <IoMdArrowDropright className="text-xl" />
              </button>
            </div>
            <div className="flex justify-between pt-4 lg:gap-8 gap-4">
              <span className="text-center">
                <h1 className="text-[#054130] primary-font text-5xl font-bold">
                  12
                </h1>
                <p className="text-lg">Years of Experience</p>
              </span>
              <span className="text-center">
                <h1 className="text-[#054130] primary-font text-5xl font-bold">
                  246
                </h1>
                <p className="text-lg">Projects Completed</p>
              </span>
              <span className="text-center">
                <h1 className="text-[#054130] primary-font text-5xl font-bold">
                  42
                </h1>
                <p className="text-lg">Awards Gained</p>
              </span>
            </div>
          </div>
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-2 left-2 animate-bounce rotate-[315deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-8 left-8 animate-bounce rotate-[315deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-14 left-14 animate-bounce rotate-[315deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-20 left-20 animate-bounce rotate-[315deg]" />
        </section>
      </div>
    </div>
  );
};

export default About;
