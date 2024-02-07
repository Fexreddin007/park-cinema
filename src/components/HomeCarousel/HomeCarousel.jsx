import React from "react";
import "./HomeCarousel.css";
import { Carousel } from "antd";

function HomeCarousel() {
  const imgStyle = {
    height: "100%",
  };
  const contentStyle = {
    
    height: "100vh",
    color: "",
    backgroundColor: "#364d79",
    objectFit: "center",
  };

  return (
    <div className="HomeCarousel">
      <Carousel>
        <div>
          <h3 style={contentStyle}>
            <img
              style={imgStyle}
              src="https://parkcinema.az/uploads/structures/slides/images/wolt-cover-key.png"
              alt="Home-img"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={imgStyle}
              src="https://parkcinema.az/uploads/structures/slides/images/migaaa.png"
              alt="Home-img"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={imgStyle}
              src="https://parkcinema.az/uploads/structures/slides/images/bckxSN9ueOgm0gJpVJmPQrecWul.jpg"
              alt="Home-img"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={imgStyle}
              src="https://parkcinema.az/uploads/structures/slides/images/photo_full_screen1703670437.png"
              alt="Home-img"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={imgStyle}
              src="https://parkcinema.az/uploads/structures/slides/images/mms-sayt-cover.jpg"
              alt="Home-img"
            />
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
