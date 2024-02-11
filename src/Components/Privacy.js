import React from 'react'

const Privacy = () => {
  return (
    <div className='flex flex-col w-full mx-10 my-7 space-y-5'>
                <div className='font-bold'>Privacy</div>
                <div><hr /></div>

                <div className='flex flex-row justify-between items-center'>
                    <div>Log Out of all Devices</div>
                    <button className='bg-gray-200 p-2 rounded-lg'>Log Out</button>
                </div>

                <div><hr /></div>

                <div>
                    <div>Current Password</div>
                    <input className='bg-gray-200 rounded-lg w-full h-[30px] px-2' />
                </div>

                <div>
                    <div>New Password</div>
                    <input className='bg-gray-200 rounded-lg w-full h-[30px] px-2' />
                </div>

                <div>
                    <div>Re-enter new Password</div>
                    <input className='bg-gray-200 rounded-lg w-full h-[30px] px-2' />
                </div>

                <button className='w-[200px] h-[50px] bg-red-500 border-[1px] border-white text-center rounded-lg p-2 text-white'>
                    Save and Continue
                </button>


            </div>
  )
}

export default Privacy