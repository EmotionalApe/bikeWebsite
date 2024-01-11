import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change slide every 5000 milliseconds (adjust as needed)
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
  };

  const handleSlideIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-[97%] mx-auto" data-carousel="slide" >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? 'block' : 'hidden'
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
            src={require(`../Images/carousel/carousel-${index + 1}.png`)}
            
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleSlideIndicatorClick(index)}
          ></button>
        ))}
      </div>

      {/* <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group w-[100px]"
        data-carousel-prev
        onClick={handlePrevSlide}
      >
      
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextSlide}
      >
       
      </button> */}
    </div>
  );
};

export default Carousel;
