import React from 'react';
import farMart from "../assets/portfolio/FarMart.png";
import TBF from "../assets/portfolio/TBF.jpg";
import calculator from "../assets/portfolio/calculator.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TBF,
      name: 'FarMart Sales Management System',
      codeLink: 'https://github.com/Sandesh-Subedi/FarMarT-Sales-Management-System'
    },
    {
      id: 2,
      src: farMart,
      name: 'Farmart Online Grocery Store',
      codeLink: 'https://github.com/Sandesh-Subedi/Farmart-Online-Grocery-Store'
    },
    {
      id: 3,
      src: calculator,
      name: 'Java-based Math Calculator',
      codeLink: 'https://github.com/Sandesh-Subedi/Math-Calculator'
    }
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 text">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check Out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt={name} className="w-80 h-52 object-cover rounded-md duration-200 hover:scale-105" />
              <p className="text-center mt-2">{name}</p>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(codeLink, '_blank')}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
