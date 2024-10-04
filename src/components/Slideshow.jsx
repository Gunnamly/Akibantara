import React, { useState } from 'react';
import './Slideshow.css';

import Slide1 from '../images/1.png';
import Slide2 from '../images/2.png';
import Slide3 from '../images/3.png';
import Slide4 from '../images/4.png';
import Slide5 from '../images/5.png';

const Slideshow = () => {
  const images = [Slide1, Slide2, Slide3, Slide4, Slide5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleScroll = (event) => {
    if (scrolling) return;

    setScrolling(true);
    setTimeout(() => setScrolling(false), 500);

    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (scrolling) return;

    setScrolling(true);
    setTimeout(() => setScrolling(false), 500);

    if (touchStart - touchEnd > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    if (touchEnd - touchStart > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div
      className="slideshow"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slide-container" style={{ transform: `translateY(-${currentIndex * 100}vh)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slide"
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
