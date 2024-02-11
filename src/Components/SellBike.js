import React, { useState } from 'react';
import BikeForm1 from './BikeForm1';
import BikeForm2 from './BikeForm2';
import BikeForm3 from './BikeForm3'
import BikeForm4 from './BikeForm4';

const SellBike = () => {
  const [currentForm, setCurrentForm] = useState(1); 

  const handleContinue = () => {
    setCurrentForm(currentForm+1)
  };

  return (
    <div className='flex flex-col bg-white rounded-xl'>

      {currentForm === 1 && <BikeForm1 />}
      {currentForm === 2 && <BikeForm2 />}
      {currentForm === 3 && <BikeForm3 />}
      {currentForm === 4 && <BikeForm4 />}

      <button
        className='w-[200px] h-[50px] bg-red-500 border-[1px] mx-4 mb-4 border-white text-center rounded-lg p-2 text-white'
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default SellBike;
