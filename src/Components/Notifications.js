import React from 'react'
import { useState } from 'react'

const Notifications = () => {

    const [isCheckedUpdates, setIsCheckedUpdates] = useState(false)
    const [isCheckedRecommend, setIsCheckedRecommend] = useState(false)

    const handleCheckboxUpdateChange = () => {
        setIsCheckedUpdates(!isCheckedUpdates)
    }

    const handleCheckboxRecommendChange = () => {
        setIsCheckedRecommend(!isCheckedRecommend)
    }

    return (
        <div className='flex flex-col w-full mx-10 my-7 space-y-5'>
            <div className='font-bold'>Recommendations</div>
            <div><hr /></div>

            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='font-bold text-md'>Receive updates and offers</div>
                    <div className='text-sm'>Get updates for special offers, sales, updates and more</div>
                </div>

                {/* checkbox updates*/}
                <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
                    <input
                        type='checkbox'
                        className='sr-only'
                        checked={isCheckedUpdates}
                        onChange={handleCheckboxUpdateChange}
                    />
                    <span
                        className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${isCheckedUpdates ? 'bg-green-500' : 'bg-[#CCCCCE]'
                            }`}
                    >
                        <span
                            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${isCheckedUpdates ? 'translate-x-6' : ''
                                }`}
                        ></span>
                    </span>

                </label>

            </div>

            <div> <hr /> </div>
            
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='font-bold text-md'>Receive updates and offers</div>
                    <div className='text-sm'>Receive recommendations based on your past activity.</div>
                </div>

                {/* checkbox recommed*/}
                <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
                    <input
                        type='checkbox'
                        className='sr-only'
                        checked={isCheckedRecommend}
                        onChange={handleCheckboxRecommendChange}
                    />
                    <span
                        className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${isCheckedRecommend ? 'bg-green-500' : 'bg-[#CCCCCE]'
                            }`}
                    >
                        <span
                            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${isCheckedRecommend ? 'translate-x-6' : ''
                                }`}
                        ></span>
                    </span>

                </label>

            </div>
            

            <button className='w-[200px] h-[50px] bg-red-500 border-[1px] border-white text-center rounded-lg p-2 text-white'>
                Save and Continue
            </button>


        </div>
    )
}

export default Notifications