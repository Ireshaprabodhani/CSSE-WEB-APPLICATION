import React from 'react'
import bg from '../../Images/bg.jpg'


function Home() {
  return (
    <div
      className="homepage_bg_image"
      style={{
        // imag: `url(${bg})`,
        width: "1000px",
        height:"650px",
        backgroundColor:"white"
      }}
    >
      <img src={bg} style={{
        width: "1000px",
        height:"550px"
      }}>
        
      </img>
    </div>
  );
}

export default Home;
