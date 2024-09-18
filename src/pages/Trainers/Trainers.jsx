import React, { useState, useEffect } from "react";
import coding from "../../assets/courses_coding.jpg";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";
import background from "../../assets/Picture1.png"; 

function Trainers() {
  const trainerNames = [
    "Ken Onyoni",
    "Manasses Chege",
    "Preston Osoro",
    "Javan Mugambi",
    "Jesse Apollo",
    "Sharon",
    "Joseph Oluoch",
    "Peter Njoroge",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trainersPerPage = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex + trainersPerPage >= trainerNames.length) {
      setCurrentIndex(0); 
    } else {
      setCurrentIndex((prev) => prev + trainersPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(trainerNames.length - trainersPerPage); 
    } else {
      setCurrentIndex((prev) => prev - trainersPerPage);
    }
  };

  return (
    <div id="trainers" className="relative py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      <img className="absolute bottom-0 right-0 w-20 h-32 object-cover" src={sideLeft} alt="" />
      <h1 className="text-center text-3xl font-bold text-black-700 mb-10">Meet Our Trainers</h1>

      <div className="flex justify-center items-center space-x-4">
        <button
          className="bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-500 transition-all"
          onClick={handlePrev}
        >
          Prev
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6"> {/* Increased gap */}
          {trainerNames.slice(currentIndex, currentIndex + trainersPerPage).map((name, idx) => (
            <div
              key={idx}
              className="relative bg-indigo-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-full h-48 object-cover rounded-tl-lg border-b-8 border-yellow-500"
                src={coding}
                alt="trainers"
              />
              <div
                className="absolute bottom-0 left-0 w-full p-4 rounded-b-lg flex justify-center items-center"
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)' // Optional for better text readability
                }}
              >
                <h3 className="text-white font-bold text-lg">{name}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          className="bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-500 transition-all"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Trainers;
