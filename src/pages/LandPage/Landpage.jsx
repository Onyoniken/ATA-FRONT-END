import React from 'react';
import "./LandPage.css";
import course from '../../assets/Asset_1-removebg-preview.png'; 
import africanPrint from '../../assets/ATA 3.jpg'; 
import triangleAsset from '../../assets/A24.jpeg'; 
function Landpage() {
  return (
    <div className="land_page">
      <div className="pictures">
        <img className='toon' src={course} alt="Illustration of a person with a laptop" />
      </div>
      <div className="land_page_info">
        <h1 className="land-page-red">Be Connected</h1>
        <h1 className="land_page_blue">Be Nurtured</h1>
        <h1 className="land-page-red-innovative">Be Innovative</h1>
      </div>
      <div className="triangle-container">
        <div className="african-print" style={{ backgroundImage: `url(${africanPrint})` }}></div>
      </div>
      
    </div>
  );
}
export default Landpage;
