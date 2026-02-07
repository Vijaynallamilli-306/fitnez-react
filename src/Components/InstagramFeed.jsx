import React from "react";
import { Instagram } from "lucide-react";

import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";

const images = [one, two, three, four, five];

const InstagramFeed = () => {
  return (
    <section className="w-full">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          w-full
        "
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative w-full h-[220px] sm:h-[230px] md:h-[250px] lg:h-[260px] overflow-hidden"
          >
            {/* Image */}
            <img
              src={img}
              alt={`Instagram ${index + 1}`}
              className="
                w-full h-full object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-110
              "
            />

            {/* Overlay with Instagram icon + text */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r from-purple-600/40 to-blue-500/40
                flex flex-col items-center justify-center
                opacity-0
                transition-opacity duration-300 ease-out
                group-hover:opacity-100
              "
            >
              <Instagram size={28} className="text-white mb-2" />
              <p className="text-white uppercase tracking-widest text-sm font-semibold">
                Instagram Feed
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
