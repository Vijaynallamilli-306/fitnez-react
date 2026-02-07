import React from "react";
import bike from "../assets/Bike.jpg";

export default function FooterSection() {
  return (
    <section
      className="w-full pt-10 pb-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bike})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* TOP TEXT */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-2xl sm:text-3xl mt-20 md:text-4xl font-semibold text-cyan-300">
          Subscribe to Our Awesome Monthly Newsletter
        </h2>
        <p className="text-gray-300 mt-2 text-base sm:text-lg">
          we usually dont spam, but sent you interesting...
        </p>
      </div>

      {/* INPUTS */}
      <div className="relative z-10 max-w-5xl mx-auto mt-10 flex flex-col md:flex-row gap-4 px-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-white px-4 py-3 rounded text-gray-600 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full bg-white px-4 py-3 rounded text-gray-600 outline-none"
        />

        <button
          className="w-full md:w-auto bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded whitespace-nowrap
                     transition-all duration-300 hover:scale-105"
        >
          Subscribe to Newsletter
        </button>
      </div>

      {/* FOOTER LINE */}
      <div className="relative z-10 w-full h-px bg-gray-700 mt-16"></div>

      {/* FOOTER CONTENT */}
      <div
        className="relative z-10
                   max-w-6xl mx-auto mt-10 pb-10 px-4
                   flex flex-col md:flex-row
                   md:justify-between
                   items-center md:items-start
                   gap-6
                   text-center md:text-left"
      >
        {/* Logo */}
        <h1 className="text-white text-3xl sm:text-4xl italic font-extrabold">
          fitne<span className="text-lime-400">z</span>
        </h1>

        {/* Links + copyright */}
        <div>
          <p
            className="text-gray-300 mt-2 md:mt-4 text-base sm:text-lg
                       flex flex-wrap justify-center md:justify-end
                       gap-x-2 gap-y-1"
          >
            <span className="text-lime-400 font-semibold">Home</span>
            <span>~</span>
            <span>Classes</span>
            <span>~</span>
            <span>Our Gym</span>
            <span>~</span>
            <span>Gallery</span>
            <span>~</span>
            <span>Contact</span>
          </p>

          <p className="text-gray-400 mt-4 text-xs sm:text-sm leading-relaxed md:text-right">
            (C) 2026. All Rights Reserved{" "}
            <span className="text-cyan-300 underline"></span>.
            Designed by{" "}
            <span className="text-cyan-300 underline">Vijay Reddy Nallamilli</span>
          </p>
        </div>
      </div>
    </section>
  );
}
