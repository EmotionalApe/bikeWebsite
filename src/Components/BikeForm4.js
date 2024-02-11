import React from 'react'
import { useState } from 'react';

const BikeForm4 = () => {

    const [sellThru, setsellThru] = useState('ListDirectly')
    const [expectedPrice, setExpectedPrice] = useState();

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row space-x-6 p-3'>

                <div className='rounded-full w-[130px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-red-500'></div>
                    <div className='text-sm'>Basic Details</div>
                </div>

                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-red-500'></div>
                    <div className='text-sm'>Condition Details</div>
                </div>

                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-red-500'></div>
                    <div className='text-sm'>Photos</div>
                </div>

                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-red-500'></div>
                    <div className='text-sm'>Expected Price</div>
                </div>

            </div>

            <div className='flex flex-col mx-6'>
                <div className='flex flex-col w-full'>
                    <div className='text-center font-bold text-lg'>Price</div>

                    <div className='w-full'><hr /></div>

                    <div className='flex flex-row flex-wrap mx-auto'>
                        <div
                            className={`m-3 w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${sellThru === 'ListDirectly' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setsellThru('ListDirectly')}
                        >
                            List Directly
                        </div>

                        <div
                            className={`m-3 w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${sellThru === 'sellThruSeller' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setsellThru('sellThruSeller')}
                        >
                            Sell Through Seller
                        </div>

                    </div>

                    <input
                        className='w-full h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                        placeholder='Expected price'
                        name='expectedPrice'
                        value={expectedPrice}
                        onChange={(event)=>setExpectedPrice(event.target.value)}
                    />

                </div>

            </div>

            <button className='w-[200px] h-[50px] bg-red-500 border-[1px] m-4 border-white text-center rounded-lg p-2 text-white'>
                Save
            </button>
        </div>
    )
}

export default BikeForm4