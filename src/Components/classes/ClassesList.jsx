import React from 'react';

export default function ClassesList() {
  // Define a reusable component for the class card
  const ClassCard = ({ title, timing, price }) => (
    <div className="flex flex-col md:flex-row border border-gray-200 shadow-sm mb-8">
      {/* Class Description Column */}
      <div className="p-8 md:w-3/4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>
        <p className="text-gray-600 leading-relaxed text-sm mt-3">
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.
        </p>
      </div>

      {/* Timing and Price Column */}
      <div className="p-8 md:w-1/4 flex items-start justify-start md:justify-center md:items-center border-t md:border-t-0 md:border-l border-gray-200 bg-gray-50/50">
        <div className="text-lg font-medium text-gray-700 space-y-2">
          <p>Timing: <span className="font-bold">{timing}</span></p>
          <p>Price: <span className="font-bold">{price}</span></p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-left text-4xl font-light mb-12 md:mb-16 text-gray-800 border-b pb-4 inline-block">
          Fitness Classes
        </h2>

        {/* Classes List */}
        <div className="space-y-6">
          <ClassCard
            title="Morning Bikram Yoga with Andrew"
            timing="6 AM to 7 AM"
            price="34$"
          />
          <ClassCard
            title="Morning Bikram Yoga with Andrew"
            timing="6 AM to 7 AM"
            price="34$"
          />
          {/* You can add more ClassCard components here for additional classes */}
        </div>
      </div>
    </section>
  );
}