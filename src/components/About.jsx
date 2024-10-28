import React from 'react';

const About = () => {
  return (
    <div className="w-full">
      <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center">
        <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full">
          {/* Section Header */}
          <div className="pb-8 text-center">
            <p className="text-5xl font-bold border-b-4 border-gray-500 inline-block mb-4">
              About Me
            </p>
            <p className="text-gray-400 text-lg mt-2">
              I am passionate about technology and driven by curiosity to explore the world of software development.
            </p>
          </div>

          {/* Main Content */}
          <div className="text-lg lg:text-xl leading-relaxed space-y-6 lg:space-y-8 px-4 sm:px-8 lg:px-16 text-center">
            <p>
              With a foundation in computer science and mathematics, I enjoy transforming ideas into functional and beautiful digital experiences.
              My expertise ranges across technologies like Java, React, .NET, and machine learning, equipping me with the skills needed to solve complex problems and innovate.
            </p>

            <p>
              Throughout my journey, I’ve developed a passion for software engineering, from frontend design to backend logic, always prioritizing clean, efficient, and scalable code. I’m constantly seeking new challenges and opportunities to learn and grow in this ever-evolving field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
