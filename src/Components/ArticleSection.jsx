import React from "react";
import BG from "../assets/BG.jpg";
import Img1 from "../assets/Image_1.jpg";
import Img2 from "../assets/image2.jpg";
import Img3 from "../assets/Image_3.jpg";

const ArticlesSection = () => {
  const articles = [
    {
      img: Img1,
      text: "Beautiful girl having coffee at the work table in office timing...",
    },
    {
      img: Img2,
      text: "Girl having coffee at the work table in office timing...",
    },
    {
      img: Img3,
      text: "Having coffee at the work table in office timing...",
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center py-24 px-6 md:px-16"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Title */}
      <h2 className="text-left text-white text-3xl md:text-4xl font-semibold italic mb-12">
        Read our creative articles on fitness
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {articles.map((item, index) => (
          <div key={index} className="text-white max-w-[380px]">
            
            {/* Image (ONLY image hover) */}
            <div className="overflow-hidden rounded">
              <img
                src={item.img}
                alt="article"
                className="
                  w-full h-[260px] object-cover
                  transition-transform duration-500 ease-out
                  hover:scale-110
                "
              />
            </div>

            <p className="mt-4 text-lg leading-relaxed">
              {item.text}
            </p>

            {/* Button (ONLY button hover) */}
            <button
              className="
                mt-5 bg-black text-white px-6 py-2 rounded-full text-sm font-medium
                transition-all duration-300 ease-out
                hover:bg-gray-900 hover:scale-105
                active:scale-95
              "
            >
              continue...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
