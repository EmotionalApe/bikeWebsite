import React from 'react'

const BikeCard = ({details}) => {
  
  return (
      
      <div className='flex flex-col w-72 justify-center m-2 bg-gray-100 p-2 items-center'>
        <div className={`w-[200px] h-[170px] bg-black overflow-hidden mx-auto my-5`}> 
          <img src={require('../Images/bikes/ducati.png')} alt="bikeImage" className=' object-fill'/>
        </div>

        <div className='rounded-[10px] p-3 flex flex-col'>
          <div className='flex flex-row justify-between'>
          <div className='font-bold'>{details.bikeName}</div>
          <div className='text-sm'>{details.bikeYear}</div>
          </div>
          
          <div className='text-[12px]'>📍{details.location}</div>

          <div className='flex flex-row space-x-5'>
            <div className='bg-gray-400 text-[12px] p-2 rounded-xl'>{details.kms} kms</div>
            <div className='bg-gray-400 text-[12px] p-2 rounded-xl'>{details.owner}nd owner</div>
            <div className='bg-gray-400 text-[12px] p-2 rounded-xl'>BS-{details.bs}</div>
          </div>
          <div className='flex flex-row text-[12px] justify-between'>
            <div>Rs {details.emi} / month</div>
            <div>Rs {details.price}</div>
          </div>
        </div>
      </div>

  )
}

export default BikeCard