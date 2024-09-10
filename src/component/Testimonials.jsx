/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Img1 from "../../src/assets/pexels-pixabay-262367.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const Testimonials = () => {
  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-bottom-group mb-4 gap-4 flex justify-end items-center w-full absolute lg:top-0 top-8">
        <button
          className="block p-3 bg-slate-300 rounded-full focus:bg-[#fd7b47] hover:bg-[#fd7b47] border border-white"
          onClick={() => previous()}
        >
          <FaArrowLeft className="bg-black" />
        </button>
        <button
          className="block p-3 bg-slate-300 rounded-full focus:bg-[#fd7b47] hover:bg-[#fd7b47] border border-white"
          onClick={() => next()}
        >
          <FaArrowRight className="bg-black" />
        </button>
      </div>
    );
  };

  const Card = ({ img, name, title, desc }) => {
    return (
      <div className="bg-[#06412f] w-80 relative flex justify-center z-20 p-8 mt-20 transform transition-transform duration-500 hover:scale-105">
        <div className="rounded-full bg-[#06412f] absolute -top-20 h-32 w-32 border-4 border-white flex items-center justify-center overflow-hidden">
          <img src={img} alt={name} className="w-24 h-24 rounded-full" />
        </div>
        <div className="relative z-20 text-center">
          <p className="text-xl primary-font font-semibold pt-16 pb-2">
            {name}
          </p>
          <p className="font-light pb-4">{title}</p>
          <hr className="border-[#fdca51]" />
          <p className="pt-4">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-[#003b29] lg:py-24 py-8">
      <div className="h-[50px] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] text-white mx-auto px-3">
        <div className="text-center mb-12">
          <p className="text-lg uppercase text-[#fdca51] tracking-wider">
            Testimonial
          </p>
          <h1 className="lg:text-4xl primary-font text-3xl font-bold">
            What our{" "}
            <span className="underline decoration-[#fdca51]">Clients</span> say
          </h1>
        </div>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          arrows={false}
          infinite
          autoPlay
          renderButtonGroupOutside={<ButtonGroup />}
          keyBoardControl={true}
          customTransition="all 1s ease"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          <Card
            img={Img1}
            name={"Ahmed"}
            title={"CEO at AST"}
            desc={
              "We would like to take the opportunity to express our delights with the ways things are progressing."
            }
          />
          <Card
            img={Img1}
            name={"Nader"}
            title={"CEO at AST"}
            desc={
              "We would like to take the opportunity to express our delights with the ways things are progressing."
            }
          />
          <Card
            img={Img1}
            name={"Shiko"}
            title={"CEO at AST"}
            desc={
              "We would like to take the opportunity to express our delights with the ways things are progressing."
            }
          />
          {/* Add more cards here if needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
