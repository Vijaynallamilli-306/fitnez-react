import React from "react";
import hero from "../assets/index_1.jpg";

export default function HomeSection() {
  return (
    <section
      className="
        w-full min-h-screen
        pt-24 sm:pt-28
        bg-cover bg-center relative
      "
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 via-teal-600/40 to-purple-700/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 ">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     font-light mb-4 tracking-wide"
        >
          Get Fit With Our Fitnez Theme
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl
                     font-light mb-8 md:mb-10 tracking-wide"
        >
          Awesomely Coded With Great Feasibility
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            className="bg-green-500 text-black
                       px-6 sm:px-8 py-3
                       rounded-full text-base sm:text-lg font-semibold shadow-lg
                       transition-all duration-300 ease-out
                       hover:bg-green-400 hover:scale-105 hover:-translate-y-1
                       active:scale-95"
          >
            GET STARTED
          </button>

          <button
            className="bg-white/80 text-black
                       px-6 sm:px-8 py-3
                       rounded-full text-base sm:text-lg font-semibold shadow-lg
                       transition-all duration-300 ease-out
                       hover:bg-white hover:scale-105 hover:-translate-y-1
                       active:scale-95"
          >
            PRICING
          </button>
        </div>
      </div>

      {/* Bottom 3 Features */}
      <div
        className="relative z-10
                   w-full grid grid-cols-1 md:grid-cols-3
                   text-white
                   px-4 sm:px-8 lg:px-10
                   py-10 sm:py-12 md:py-16
                   backdrop-blur-sm bg-black/30"
      >
        {/* Professional */}
        <div
          className="group text-center px-2 sm:px-4 mb-8 md:mb-0
                     transition-transform duration-300 ease-out
                     hover:-translate-y-2 hover:scale-[1.02]"
        >
          <h3 className="text-xl sm:text-2xl italic mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-green-300">
            Professional ~
          </h3>

          <p className="text-sm leading-relaxed opacity-90 max-w-md mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>

        {/* Affordable */}
        <div
          className="group text-center px-2 sm:px-4 mb-8 md:mb-0
                     transition-transform duration-300 ease-out
                     hover:-translate-y-2 hover:scale-[1.02]"
        >
          <h3 className="text-xl sm:text-2xl italic mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-emerald-300">
            Affordable ~
          </h3>

          <p className="text-sm leading-relaxed opacity-90 max-w-md mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>

        {/* Experienced */}
        <div
          className="group text-center px-2 sm:px-4
                     transition-transform duration-300 ease-out
                     hover:-translate-y-2 hover:scale-[1.02]"
        >
          <h3 className="text-xl sm:text-2xl italic mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-cyan-300">
            Experienced ~
          </h3>

          <p className="text-sm leading-relaxed opacity-90 max-w-md mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
      </div>
    </section>
  );
}
