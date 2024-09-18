import React from 'react';
import sideImg from "../../assets/Asset_5-removebg-preview-l.png";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";

const Online = () => {
  const imageUrls = [
    '/src/assets/1.png',
    '/src/assets/2.png',
    '/src/assets/a.jpg',
    '/src/assets/A2.png',
    '/src/assets/A3.png',
  ];

  return (
    <div className="relative w-full flex flex-col items-center  bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
      
      <img
        className="absolute bottom-4 left-0 w-20 h-40 object-cover opacity-75"
        src={sideImg}
        alt="Left Decoration"
      />
      <img
        className="absolute top-4 right-0 w-28 h-40 object-cover opacity-75"
        src={sideLeft}
        alt="Right Decoration"
      />

      
        
        <div className="flex flex-col md:flex-row p-8 bg-gradient-to-r from-black-900 to-blue-800 text-black rounded-t-lg">
         
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 bg-black-800 p-8 rounded-lg shadow-lg">
            <h1 className="font-['Comic_Sans_MS'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ONLINE OR PHYSICAL CLASSES?
            </h1>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li className="text-lg">Comprehensive online and physical classes</li>
              <li className="text-lg">Flexibility of online learning</li>
              <li className="text-lg">In-person interaction of a physical classroom</li>
            </ul>
            <h2 className="font-['Comic_Sans_MS'] text-3xl mb-4">Our Approach</h2>
            <p className="text-lg leading-relaxed">
              <em>We understand that everyone learns differently. Our program is designed to accommodate various learning styles and preferences, ensuring that each student can thrive in their chosen environment.</em>
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/src/assets/1.png"
              alt="Online and Physical Classrooms"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-8 bg-gradient-to-r from-indigo-100 via-blue-200 to-indigo-100">
          
          <div className="w-full flex justify-center space-x-4">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                className={`inline-block rounded-full shadow-lg ${
                  index === 0 ? 'h-12 w-12' :
                  index === 1 ? 'h-16 w-16' :
                  index === 2 ? 'h-20 w-20' :
                  index === 3 ? 'h-32 w-32' :
                  'h-28 w-28'
                }`}
                src={url}
                alt={`Student ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default Online;
