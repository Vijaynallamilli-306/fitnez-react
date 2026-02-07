import React from "react";

import image1 from "../../assets/gym_1.jpg";
import image2 from "../../assets/gym_2.jpg";
import image3 from "../../assets/gym_3.jpg";
import image4 from "../../assets/gym_4.jpg";
import image5 from "../../assets/gym_5.jpg";
import image6 from "../../assets/gym_6.jpg";
import image7 from "../../assets/gym_7.jpg";
import image8 from "../../assets/gym_8.jpg";
import image9 from "../../assets/gym_9.jpg";

const gymImages = [
  image1, image2, image3,
  image4, image5, image6,
  image7, image8, image9,
];

const GalleryG = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 font-poppins">

      {/* Header Section */}
      <header className="mb-8 sm:mb-10">
        <h1 className="text-left text-3xl sm:text-4xl font-light text-gray-800 mb-4">
          Gallery
        </h1>

        <p className="text-gray-500 text-left leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>
      </header>

      {/* Responsive Image Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-5
          sm:gap-6
          lg:gap-8
          mt-5
          mb-5
        "
      >
        {gymImages.map((imageUrl, index) => (
          <div
            key={index}
            className="w-full aspect-square overflow-hidden rounded group"
          >
            <img
              src={imageUrl}
              alt={`Gallery ${index + 1}`}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryG;
