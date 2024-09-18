import React from 'react'
import "./BlogSpace.css"
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
function Blogspace() {
  return (
    <div className='blogspace_page'>
      <div className="container_blog">
        <img className='blog_logo' src={logo} alt="Blog Space Coming Soon" />
        <p>Exciting content is on its way!</p>
        <p>Stay tuned for our upcoming blog space.</p>
        <NavLink to="/">Explore More</NavLink>
      </div>
    </div>
  );
}

export default Blogspace