import React from "react";
import coding from "../../assets/courses_coding.jpg";
import africa from "../../assets/ATA 3.jpg";
import sideImg from "../../assets/Asset_5-removebg-preview-l.png";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";

function Team() {
  return (
    <div className="relative bg-yellow-500 py-12 px-4 sm:px-6 lg:px-8">
      {/* Side images */}
      <img
        className="absolute bottom-4 left-0 w-20 h-40 object-cover"
        src={sideImg}
        alt="Left Decoration"
      />
      <img
        className="absolute top-4 right-0 w-28 h-40 object-cover"
        src={sideLeft}
        alt="Right Decoration"
      />

      <h1 className="text-white text-4xl font-bold text-center mb-12">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {/* Team member card */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105 w-full max-w-sm mx-auto">
          <div
            className="w-full h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${coding})` }}
          >
            <img
              className="w-full h-full object-cover opacity-0"
              src={coding}
              alt="Team Member"
            />
          </div>
          <div className="w-full h-6 bg-white"></div>
          <img
            className="w-full h-12 mt-2 object-cover"
            src={africa}
            alt="African theme"
          />
        </div>

        {/* Second Team member card */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105 w-full max-w-sm mx-auto">
          <div
            className="w-full h-40 bg-cover bg-center mb-4"
            style={{ backgroundImage: `url(${coding})` }}
          >
            <img
              className="w-full h-full object-cover opacity-0"
              src={coding}
              alt="Team Member"
            />
          </div>
          <div className="w-full h-6 bg-white"></div>
          <img
            className="w-full h-12 mt-2 object-cover"
            src={africa}
            alt="African theme"
          />
        </div>

        {/* Third Team member card */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105 w-full max-w-sm mx-auto">
          <div
            className="w-full h-40 bg-cover bg-center mb-4"
            style={{ backgroundImage: `url(${coding})` }}
          >
            <img
              className="w-full h-full object-cover opacity-0"
              src={coding}
              alt="Team Member"
            />
          </div>
          <div className="w-full h-6 bg-white"></div>
          <img
            className="w-full h-12 mt-2 object-cover"
            src={africa}
            alt="African theme"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
