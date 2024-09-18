import React, { useState } from "react";
import coding from "../../assets/courses_coding.jpg";
import designer from "../../assets/courses_designer.jpg";
import marketing from "../../assets/courses_dgmarketing.jpg";
import sideImg from "../../assets/Asset_5-removebg-preview-l.png";
import StarIcon from "@mui/icons-material/Star";
import MovingIcon from "@mui/icons-material/Moving";
import fist from "../../assets/fist.png";

function Courses() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);

  const handleOpenInfo = (cardNumber) => {
    if (cardNumber === 1) setShowInfo1(true);
    else if (cardNumber === 2) setShowInfo2(true);
    else if (cardNumber === 3) setShowInfo3(true);
  };

  const handleCloseInfo = (cardNumber) => {
    if (cardNumber === 1) setShowInfo1(false);
    else if (cardNumber === 2) setShowInfo2(false);
    else if (cardNumber === 3) setShowInfo3(false);
  };

  return (
    <div id="courses" className="relative py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      <img
        className="absolute bottom-0 left-0 w-24 h-24 object-cover"
        src={sideImg}
        alt=""
      />
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl text-indigo-700 font-serif">
          Explore Our Courses
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        <div
          className={`bg-yellow-300 p-4 relative rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
            showInfo1 ? "shadow-2xl" : ""
          }`}
          onMouseEnter={() => handleOpenInfo(1)}
          onMouseLeave={() => handleCloseInfo(1)}
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover rounded-md mb-4 transition-all duration-300 transform hover:scale-105"
              src={coding}
              alt="coding"
            />
            <div className="absolute bottom-4 left-4 bg-red-500 p-2 rounded-full text-white transition-transform duration-300">
              <StarIcon />
            </div>
          </div>
          <h3 className="text-indigo-700 font-bold text-lg">Coding</h3>
          {showInfo1 && (
            <div className="absolute inset-0 bg-blue-50 p-4 rounded-lg z-10 overflow-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold text-sm">
                AliliTechAfrica offers comprehensive coding courses covering a
                range of programming languages and frameworks. Whether you're a
                beginner or an experienced coder, our courses cater to all skill
                levels.
              </p>
            </div>
          )}
        </div>

        <div
          className={`bg-yellow-300 p-4 relative rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
            showInfo2 ? "shadow-2xl" : ""
          }`}
          onMouseEnter={() => handleOpenInfo(2)}
          onMouseLeave={() => handleCloseInfo(2)}
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover rounded-md mb-4 transition-all duration-300 transform hover:scale-105"
              src={designer}
              alt="design"
            />
            <div className="absolute bottom-4 left-4 bg-red-500 p-2 rounded-full text-white transition-transform duration-300">
              <MovingIcon />
            </div>
          </div>
          <h3 className="text-indigo-700 font-bold text-lg">Design</h3>
          {showInfo2 && (
            <div className="absolute inset-0 bg-blue-50 p-4 rounded-lg z-10 overflow-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold text-sm">
                Unlock your creative potential with AliliTechAfrica's graphic
                design courses. From fundamental design principles to advanced
                techniques.
              </p>
            </div>
          )}
        </div>

        <div
          className={`bg-yellow-300 p-4 relative rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
            showInfo3 ? "shadow-2xl" : ""
          }`}
          onMouseEnter={() => handleOpenInfo(3)}
          onMouseLeave={() => handleCloseInfo(3)}
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover rounded-md mb-4 transition-all duration-300 transform hover:scale-105"
              src={marketing}
              alt="digital marketing"
            />
            <div className="absolute bottom-4 left-4 bg-red-500 p-2 rounded-full transition-transform duration-300">
              <img className="w-6" src={fist} alt="" />
            </div>
          </div>
          <h3 className="text-indigo-700 font-bold text-lg">Digital Marketing</h3>
          {showInfo3 && (
            <div className="absolute inset-0 bg-blue-50 p-4 rounded-lg z-10 overflow-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold text-sm">
                Elevate your marketing prowess with AliliTechAfrica's digital
                marketing courses.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* White gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </div>
  );
}

export default Courses;
