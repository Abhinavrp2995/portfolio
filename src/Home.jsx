import React from "react";
import HeroImage from "./assets/abhi.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm a Abhinav R P
          </h2>
          <br/>
          <p className="text-xl sm:text-xl font-bold text-white">
          MERN STACK DEVELOPER
          </p>
          <p className="text-gray-500 py-4 max-w-md">
          I'm a passionate fullstack developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, and web design.
            I love creating intuitive, user-friendly websites and applications that solve real-world problems. Let's
            build something amazing together!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
       <img
       src={HeroImage}
       alt="my profile"
       className="rounded-full w-48 h-48 object-cover"
       />
      </div>
      </div>
    </div>
  );
};

export default Home;
