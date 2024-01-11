import React from 'react'

const NewsCard = ({details}) => {
    return (
        <div className='flex flex-col w-72 justify-evenly m-2'>

            <div className='bg-white mb-3 rounded-[10px] p-3 flex flex-col'>
            <img src={details.newsImg} alt="painting" className=' object-fill' />
                <div className='font-bold'>{details.newsTitle}</div>
                <div className='text-[12px]'>{details.newsBody}</div>
            </div>
        </div>
    )
}

export default NewsCard