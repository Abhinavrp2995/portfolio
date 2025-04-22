import React from "react";
import arrayDestruct  from "./assets/portfolio/zomato.png";
import installNode from "./assets/portfolio/rockstar.png";
import navbar from "./assets/portfolio/kfc.png";
import reactParallax from "./assets/portfolio/prime.png";
import  reactSmooth  from "./assets/portfolio/parallax.png";
import  reactWeather from "./assets/portfolio/animation.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink: "https://abhinavrp2995.github.io/zomato/",
      codeLink: "https://github.com/Abhinavrp2995/zomato.git",
    },
    {
      id: 2,
      src: reactParallax,
      demoLink: "https://prime-video-rho.vercel.app/",
      codeLink: "https://github.com/Abhinavrp2995/prime-video.git",
    },
    {
      id: 3,
      src: navbar,
      demoLink: "https://abhinavrp2995.github.io/kfc/",
      codeLink: "https://github.com/Abhinavrp2995/kfc.git",
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink: "https://abhinavrp2995.github.io/parallaxwebsite/",
      codeLink: "https://github.com/Abhinavrp2995/parallaxwebsite.git",
    },
    {
      id: 5,
      src: installNode,
      demoLink: "https://abhinavrp2995.github.io/Rockstar-Games/",
      codeLink: "https://github.com/Abhinavrp2995/Rockstar-Games.git",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: "https://abhinavrp2995.github.io/trip/",
      codeLink: "https://github.com/Abhinavrp2995/animation-css.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, demoLink, codeLink }) => (
  <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
    <img
      src={src}
      alt=""
      className="rounded-md duration-200 hover:scale-105"
    />
    <div className="flex items-center justify-center">
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105 bg-gray-700 rounded-md"
        >
          Demo
        </a>
      )}
      {codeLink && (
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105 bg-gray-700 rounded-md"
        >
          Code
        </a>
      )}
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Portfolio;