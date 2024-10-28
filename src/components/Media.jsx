import React from "react";
import { FaFacebook, FaInstagram, } from "react-icons/fa";

const Media = () => {
  return (
    <footer className="bg-black p-4 mt-auto">
      <p className="text-white text-center">Connect with me:</p>
      <div className="flex justify-center p-2">
        <a
          href="https://www.facebook.com/SandeshSubedi22/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 hover:text-blue-600"
        >
          <FaFacebook size={25} />
        </a>
        <a
          href="https://www.instagram.com/its_sandezh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 hover:text-pink-500"
        >
          <FaInstagram size={25} />
        </a>
      </div>
      <p className="text-white text-center">&copy; 2024 sandeshsubedi</p>
    </footer>
  );
};

export default Media;