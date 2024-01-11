import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="flex h-[450px]">
      <div className="w-3/4 my-2">
        <img src={mainImage} alt="Main Product" className="w-full h-full overflow-hidden" />
      </div>
      <div className="w-1/4 pl-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Thumbnail ${index + 1}`}
            className="w-full h-[140px] cursor-pointer my-1"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
