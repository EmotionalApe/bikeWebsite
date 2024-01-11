import React from 'react'

const ReviewCard = ({details}) => {
    return (
        <div className='w-[300px] h-[250px] bg-white flex flex-col p-4 rounded-lg space-y-4 my-3'>
            <div className='w-full flex flex-row items-center space-x-6 justify-start pl-6'>
                <div>
                    <img
                        src={details.imageUrl}
                        alt='profile'
                        className='w-[30px] h-[30px]'
                    /></div>
                <div className='text-sm'>{details.profileName}</div>
            </div>

            <div className='font-bold text-sm'>India bound Ducati Diavel revealed</div>

            <p className='text-xs text-justify'>Ducati has updated its product portfolio and revealed the new Diavel V4 for the international markets. This power cruiser will also enter India, but its launch details are not available yet.</p>

            <div>
                {details.revImage?<img 
                src={details.revImage}
                alt='review'
                className='w-[60px] h-[50px]'/> : null}
            </div>
        </div>
    )
}

export default ReviewCard