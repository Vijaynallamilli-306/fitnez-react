import React from "react";
import professionalImg from "../assets/professional.jpg";
import affordableImg from "../assets/affordable.jpg";
import experiencedImg from "../assets/experienced.jpg";
import Background from "../assets/Background.jpg";

const features = [
  {
    title: "PROFESSIONAL",
    img: professionalImg,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...",
  },
  {
    title: "AFFORDABLE",
    img: affordableImg,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...",
  },
  {
    title: "EXPERIENCED",
    img: experiencedImg,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...",
  },
];

export default function SectionOne() {
  return (
    <section
      className="w-full py-20 min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-light tracking-wide text-gray-800
                     transition-transform duration-500 ease-out
                     hover:scale-[1.02]"
        >
          Super Speciality Gym for Your Health
        </h2>

        <p
          className="text-xl md:text-2xl mt-4 text-gray-600
                     transition-all duration-500
                     hover:-translate-y-1"
        >
          Awesomely Coded With Great Feasibility
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
        {features.map((item, index) => (
          /* Gradient border wrapper */
          <div
            key={index}
            className="
              group
              rounded-2xl
              p-[2px]
              bg-gradient-to-br
              from-lime-400 via-green-400 to-cyan-400
              transition-transform duration-300
              hover:-translate-y-2
            "
          >
            {/* Actual card */}
            <div
              className="
                rounded-2xl
                bg-white
                shadow-md
                overflow-hidden
                transition-shadow duration-300
                group-hover:shadow-xl
              "
            >
              {/* Arrow */}
              <div className="w-full flex justify-center -mt-4 mb-2">
                <div
                  className="flex items-center gap-1
                             transition-transform duration-300
                             group-hover:scale-110"
                >
                  <span className="w-3 h-3 bg-pink-500 rotate-45 inline-block"></span>
                  <span className="w-3 h-3 bg-green-500 rotate-45 inline-block"></span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-center text-2xl font-semibold italic py-3
                           transition-colors duration-300
                           group-hover:text-green-600"
              >
                {item.title}
              </h3>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full h-56 object-cover
                    transition-transform duration-500 ease-out
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Text */}
              <p
                className="text-center text-gray-600 px-6 py-6 text-sm leading-relaxed
                           transition-colors duration-300
                           group-hover:text-gray-700"
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
