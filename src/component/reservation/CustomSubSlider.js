import React, { useState, useEffect } from 'react';
import '../../theme/css-component/slider.css'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const CustomSubSlider = ({ images }) => {
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
        {/* <img  className={`slide ${animating ? 'slide-animate' : ''}`} style={{ border: '1px solid orange', borderRadius: '10%' }}
        src={images[currentSlide]} alt="res sub cat image" /> */}
        </div>
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>


      {/* <img  className={`slide ${animating ? 'slide-animate' : ''}`} style={{ border: '1px solid orange', borderRadius: '10%' }}
        src={images[currentSlide]} alt="res sub cat image" /> */}
    </>

  );
};

export default CustomSubSlider;
