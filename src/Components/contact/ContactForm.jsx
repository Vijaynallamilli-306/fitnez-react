import React, { useState } from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

// Mock Component for the form inputs
const InputField = ({ label, id, type = 'text', placeholder, rows }) => (
  <div className="mb-4">
    {/* Label is intentionally omitted to match the image, but kept for accessibility if needed */}
    {rows ? (
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out resize-none text-gray-700"
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-700"
      />
    )}
  </div>
);

// Mock Component for the contact details list
const ContactDetailItem = ({ Icon, text }) => (
  <div className="flex items-start mb-4 text-gray-700">
    <Icon className="w-5 h-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
    <span className="text-base font-normal">{text}</span>
  </div>
);

// Main Application Component
const ContactForm = () => {
  // Simple state to show a "success" message on submit for demonstration
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission logic here (e.g., API call)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="bg-white font-sans flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-left text-4xl font-light text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-left text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and scrambled it to make a type specimen book. It has survived not only five. Lorem Ipsum is simply dummy text of the printing and scrambled it to make a type specimen book.
          </p>
        </header>

        {/* Form and Details Grid Container */}
        <div className="md:grid md:grid-cols-12 md:gap-x-12">

          {/* Left Column: Contact Form (Takes 7/12 columns on medium screens and up) */}
          <div className="md:col-span-7 mb-10 md:mb-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField id="name" placeholder="Your Name" />
              <InputField id="email" type="email" placeholder="Your Email" />
              <InputField id="message" rows={5} placeholder="Your Message" />
              
              <button
                type="submit"
                className="w-48 px-6 py-3 mt-4 text-white text-base font-medium bg-gray-700 hover:bg-gray-800 rounded-lg shadow-md transition duration-200 ease-in-out"
              >
                SUBMIT
              </button>

              {isSubmitted && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded-lg text-sm">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact Details (Takes 5/12 columns on medium screens and up) */}
          <div className="md:col-span-5 pt-4 md:pt-0">
            <div className="text-gray-800 mb-8">
              <p className="text-left font-medium text-base leading-relaxed mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-left text-base font-medium text-gray-900">
                Lorem Ipsum
              </p>
            </div>

            {/* Contact Information List */}
            <div className="space-y-6">
              <ContactDetailItem Icon={Phone} text="800 1234 5678" />
              <ContactDetailItem Icon={Mail} text="info@yourwebsite.com" />
              <ContactDetailItem Icon={Globe} text="www.website.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;