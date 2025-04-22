import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Full Stack Developer (MERN) passionate about building dynamic and responsive web applications using
                    MongoDB, Express.js, React.js, and Node.js. Skilled in API development and integration with Axios,
                    and proficient in state management using Redux. Experienced with Bootstrap, Tailwind CSS, and
                    JavaScript for front-end development. Strong knowledge of Git and GitHub for version control and
                    deployment on Netlify, Vercel, and Render. Dedicated to writing clean, maintainable code and
                    continuously learning new technologies.
        </p>

       
      </div>
    </div>
  );
};

export default About;