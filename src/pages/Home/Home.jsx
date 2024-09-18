import React from "react";
import About from "../About/About";
import Trainers from "../Trainers/Trainers";
import Courses from "../Courses/Courses";
import Motivation from "../Motivation/Motivation";
import Services from "../Services/Services";
import Landpage from "../LandPage/Landpage";
import Team from "../Team/Team";
import Online from "../Online/Online";
import Contact from "../Contact/Contact";
function Home() {
  return (
    <div>
      <Landpage />
      <About />
      <Courses />
      <Services />
      <Trainers />
      <Team />
      <Online />
      <Motivation />
    <Contact/>
    </div>
  );
}

export default Home;
