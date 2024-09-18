import React from "react";
import "./About.css";
import aboutImg from "../../assets/about_video.mp4";
function About() {
  return (
    <div id="about">
      <div className="video_bg">
        <video autoPlay loop muted src={aboutImg}></video>
        <div className="overlay"></div>
        <div className="info_video">
          <h1 className="info_header">About Us</h1>
          <p className="info_page">
            Akili Tech Africa is dedicated to connecting individuals with the
            right tech spaces. We foster growth, nurture talent, and inspire
            innovation. Our passionate tech family pushes boundaries to create
            impactful change through technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
