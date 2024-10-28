import React from 'react';
import myImage from '../assets/myImage.png';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-scroll'

const Home = () => {
  return (

    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 ">
        {/* Left Side - Text Section */}
        <div className="flex flex-col justify-center h-full text-center md:text-left md:mr-8 mt-16 md:mt-0">
          <h2 className="text-4xl  py-4 max-w-md sm:text-7xl font-bold text-white">
            I'm a software developer.
          </h2>

          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            A dedicated software developer with a strong foundation in computer science,
            mathematics, and hands-on experience across diverse technologies like Java,
            React, .NET, and machine learning.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded
             hover:bg-blue-700 bg-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={myImage}
            alt="my profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover" // Adjusted sizes for circular shape
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
