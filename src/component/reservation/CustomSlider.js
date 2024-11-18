import React, { useState, useEffect } from 'react';
import '../../theme/css-component/slider.css'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const CustomSlider = ({ images, menus }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return; // Prevent clicking while animating
    setAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (animating) return; // Prevent clicking while animating
    setAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500); // Match the duration of the animation

    return () => clearTimeout(timer);
  }, [currentSlide]);



  return (
    <>


      <div className="slider-container">
        <div className={`slide ${animating ? 'slide-animate' : ''}`} style={{ backgroundImage: `url(${images[currentSlide]})` }}>
          <div className="slide-content">
            <h2>{(menus.length > 0 && menus[currentSlide]) ? menus[currentSlide] : `Menu-${currentSlide + 1}`}</h2>
          </div>
        </div>
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
    </>

  );
};

export default CustomSlider;
