import React from 'react';
import coding from "../../assets/courses_coding.jpg";
import backgroundImg from "../../assets/ATA 3.jpg"; 

function Services() {
  return (
    <div id="services" className="bg-gray-100 py-16 px-4">
      <h1 className="text-center font-bold text-3xl text-gray-700 mb-6 font-serif">Our Services</h1>
      <h4 className="text-center text-xl font-light mb-12 text-gray-700">
        We provide accessible, transformative digital training that's designed for Africa
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {Array(3).fill(0).map((_, idx) => (
          <div
            key={idx}
            className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out w-full max-w-xs cursor-pointer"
          >
           
            <div
              className="absolute inset-0 bg-cover bg-center rounded-xl border-b-8 border-yellow-500"
              style={{
                backgroundImage: `url(${backgroundImg})`,
                filter: 'brightness(0..2)', 
                opacity: 0.3
              }}
            ></div>

            <div className="relative mb-6">
              <div className="relative w-full h-48 bg-cover bg-center rounded-xl border-b-8 border-yellow-500" style={{ backgroundImage: `url(${coding})` }}>
              
                <img
                  src={coding}
                  alt="coding service"
                  className="w-full h-full object-cover rounded-xl opacity-0"
                />
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center transform -translate-x-4 -translate-y-4 shadow-lg transition-all duration-300 hover:scale-110">
              </div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-500 transform rotate-45 translate-x-3 translate-y-3"></div>
            </div>

            <h3 className="text-black-700 font-semibold text-lg text-center">Affordable techie team training</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
