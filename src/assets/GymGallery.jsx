// src/Components/GymGallery.jsx

import React from 'react';

// ----------------------------------------------------------------------
// 1. IMPORTING ASSETS (Following your requested syntax: import name from "path")
//    You must save 9 separate images in your src/assets folder 
//    and replace the placeholder file names with your actual image file names.
// ----------------------------------------------------------------------
import image1 from '../../assets/gym_1.jpg'; // Man doing triceps pushdown
import image2 from '../../assets/gym_2.jpg'; // Red shoes and kettlebell
import image3 from '../../assets/gym_3.jpg'; // Man tying shoe
import image4 from '../../assets/gym_4.jpg'; // Dumbbells
import image5 from '../../assets/gym_5.jpg'; // Man lifting barbell
import image6 from '../../assets/gym_6.jpg'; // Man doing triceps pushdown (Duplicate)
import image7 from '../../assets/gym_7.jpg'; // Man doing triceps pushdown (Duplicate)
import image8 from '../../assets/gym_8.jpg'; // Red shoes and kettlebell (Duplicate)
import image9 from '../../assets/gym_9.jpg'; // Man tying shoe (Duplicate)

// Array of imported images
const gymImages = [
  image1, image2, image3,
  image4, image5, image6,
  image7, image8, image9,
];

const GymGallery = () => {
  return (
    // Max width container, centered, with responsive padding
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          Our Gym
        </h1>
        {/* The text looks slightly gray and uses a standard font */}
        <p className="text-gray-500 max-w-3xl leading-relaxed text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>
      </header>

      {/* Image Grid Section (3x3 Layout) */}
      <div className="grid grid-cols-3 gap-0">
        {gymImages.map((imageUrl, index) => (
          <div 
            key={index} 
            // Setting the container to be a perfect square
            className="w-full aspect-square overflow-hidden" 
          >
            <img
              src={imageUrl} // Using the imported image variable
              alt={`Gym image ${index + 1}`}
              // w-full and h-full ensure the image fills the container
              // object-cover crops the image to maintain aspect ratio
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymGallery;