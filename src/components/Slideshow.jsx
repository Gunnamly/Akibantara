import React, { useEffect, useState } from 'react';
import './Slideshow.css';

import Slide1 from '../images/Slideshow1.png';
import Slide2 from '../images/Slideshow2.png';
import Slide3 from '../images/Slideshow3.jpg';
import Slide4 from '../images/Slideshow4.jpg';

const Slideshow = () => {
  const images = [Slide1, Slide2, Slide3, Slide4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      <div className="slide-text">Akibantara
        <p className="slide-title">Express the culture</p>
      </div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
