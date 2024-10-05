import React, { useState, useEffect } from 'react';
import './Slideshow.css';

import Slide1 from '../images/1.png';
import Slide2 from '../images/2.png';
import Slide3 from '../images/3.png';
import Slide4 from '../images/4.png';

import MobileSlide1 from '../images/m1.png';
import MobileSlide2 from '../images/m2.png';
import MobileSlide3 from '../images/m3.png';
import MobileSlide4 from '../images/m4.png';

const Slideshow = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth <= 768) {
        setImages([MobileSlide1, MobileSlide2, MobileSlide3, MobileSlide4]);
      } else {
        setImages([Slide1, Slide2, Slide3, Slide4]);
      }
    };

    updateImages(); 
    window.addEventListener('resize', updateImages); 

    return () => {
      window.removeEventListener('resize', updateImages); 
    };
  }, []);

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
