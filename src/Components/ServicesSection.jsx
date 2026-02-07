import React from "react";
import { Monitor, Camera, Code2, Users, Tag, Trophy } from "lucide-react";

const services = [
  {
    icon: <Monitor size={32} strokeWidth={1.5} />,
    title: "WEB DESIGN",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Camera size={32} strokeWidth={1.5} />,
    title: "PHOTOGRAPHY",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Code2 size={32} strokeWidth={1.5} />,
    title: "PSD TO HTML",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: "MARKETING",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Tag size={32} strokeWidth={1.5} />,
    title: "LOGO DESIGNING",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Trophy size={32} strokeWidth={1.5} />,
    title: "GRAPHIC DESIGN",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">

        {services.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="
              group
              px-10 py-12 text-center
              transition-all duration-300 ease-out
              hover:bg-gray-50
            "
          >
            <div
              className="
                flex justify-center text-gray-400 mb-5
                transition-all duration-300
                group-hover:text-green-500
                group-hover:scale-110
              "
            >
              {item.icon}
            </div>

            <h3
              className="
                text-xl tracking-wider font-semibold mb-4
                transition-colors duration-300
                group-hover:text-green-600
              "
            >
              {item.title}
            </h3>

            <p
              className="
                text-gray-500 leading-relaxed text-sm
                transition-colors duration-300
                group-hover:text-gray-600
              "
            >
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      <div className="border-t border-gray-300 my-12"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">

        {services.slice(3, 6).map((item, index) => (
          <div
            key={index}
            className="
              group
              px-10 py-12 text-center
              transition-all duration-300 ease-out
              hover:bg-gray-50
            "
          >
            <div
              className="
                flex justify-center text-gray-400 mb-5
                transition-all duration-300
                group-hover:text-green-500
                group-hover:scale-110
              "
            >
              {item.icon}
            </div>

            <h3
              className="
                text-xl tracking-wider font-semibold mb-4
                transition-colors duration-300
                group-hover:text-green-600
              "
            >
              {item.title}
            </h3>

            <p
              className="
                text-gray-500 leading-relaxed text-sm
                transition-colors duration-300
                group-hover:text-gray-600
              "
            >
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
