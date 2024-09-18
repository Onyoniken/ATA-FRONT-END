import React, { useState } from "react";
import { Send } from "lucide-react";
import sideImg from "../../assets/Asset_5-removebg-preview-l.png";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidEmail = validateEmail(formData.email);
    if (!isValidEmail) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
      console.log("Form data:", formData);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center">
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

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full">
        <div className="lg:flex">
          <div className="lg:w-2/5 bg-gradient-to-br from-purple-600 to-indigo-600  p-12 lg:p-16 text-white">
            <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="mt-16 space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">123 Main St, City, Country</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-lg">info@ata.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-lg">+1 234 567 8900</span>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 p-12 lg:p-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-5 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-5 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    emailError ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your@email.com"
                  required
                />
                {emailError && <p className="mt-2 text-base text-red-600">{emailError}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-5 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-indigo-600  text-white py-4 px-8 rounded-lg text-xl font-semibold hover:from--700 hover:to-indigo-700 to-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out flex items-center justify-center"
                >
                  <Send className="mr-3 h-6 w-6" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}