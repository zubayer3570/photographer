import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import image1 from "../../images/recent/recent-works-1.jpg";
import image2 from "../../images/recent/recent-works-2.jpg";
import image3 from "../../images/recent/recent-works-3.jpg";
import "./RecentWorks.css";

const RecentWorks = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h2 className="text-center">See My recent Works!</h2>
      <div className="recent-works-container">
        <Carousel
          className="sliders"
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default RecentWorks;
