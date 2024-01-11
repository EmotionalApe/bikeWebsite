import React from 'react'

const Categories = () => {
  return (
    <div className='flex m-auto w-[97%] justify-between p-3'>
        <div className='h-[100px] w-[200px] bg-gray-100 border-gray-600 border-2 rounded-xl flex flex-col justify-center items-center'>
            Cruiser
        </div>

        <div className='h-[100px] w-[200px] bg-gray-100 border-gray-600 border-2 rounded-xl flex flex-col justify-center items-center'>
            Sports
        </div> 

        <div className='h-[100px] w-[200px] bg-gray-100 border-gray-600 border-2 rounded-xl flex flex-col justify-center items-center'>
            Cafe Racer
        </div>

        <div className='h-[100px] w-[200px] bg-gray-100 border-gray-600 border-2 rounded-xl flex flex-col justify-center items-center'>
            Street
        </div>  

        <div className='h-[100px] w-[200px] bg-gray-100 border-gray-600 border-2 rounded-xl flex flex-col justify-center items-center'>
            Touring
        </div>

        <div className='h-[110px] w-[180px] bg-gray-100 border-gray-600 border-2 rounded-xl flex flex-col justify-center items-center'>
            Scrambler
        </div>
    </div>
  )
}

export default Categories