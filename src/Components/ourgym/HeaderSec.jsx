import React from "react";
import vinay from "../../assets/index_1.jpg";

export default function HeaderSec() {
  return (
    <section
      className="w-full p-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${vinay})` }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 via-teal-600/40 to-purple-700/40"></div>

      {/* Navbar */}
      <div className="w-full absolute top-0 left-0 flex justify-between items-center px-10 py-6 text-white text-lg font-light tracking-wide">
        {/* <div className="text-3xl font-bold">
          fitne<span className="text-green-400">z</span>
        </div>
        <div className="space-x-8">
          <a href="#">Home ~</a>
          <a href="#">Clases ~</a>
          <a href="#"className="text-green-300">Our Gym ~</a>
          <a href="#">Gallery ~</a>
          <a href="#">Contact</a>
        </div> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mt-40 mb-20
       flex-col  justify-center  text-center text-white ">
        <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
          Get Fit With Our Fitnez Theme
        </h1>
        <p className="text-2xl md:text-3xl font-light tracking-wide">
          Awesomely Coded With Great Feasibility
        </p>
      </div>
    </section>
  );
}