import React from 'react'

const YourProfile = () => {
  return (
    <div className='bg-white rounded-xl flex flex-col w-full space-y-5 p-7'>
      <div className='bg-gray-700 w-full h-[200px]'></div>
      <div className='bg-gray-500 w-[100px] h-[100px] rounded-full mt-5'></div>


      <div>
        <div className='font-bold text-xl mt-3'>Aditya Mali</div>
        <div className='text-gray-500 text-lg'>adityamali2003@icloud.com</div>
        <div className='text-gray-500 text-lg'>7709953054</div>
      </div>



      <div className='my-4'><hr /></div>

      <div className='flex flex-row justify-between'>

        <div className='flex flex-col'>
          <div className='font-bold'>Google</div>
          <div>Link your Google account to seamlessly use your contact list.</div>
        </div>

        <button className='w-[250px] h-[50px] border-black rounded-xl border-[2px] text-center'>
          Continue with Google.
        </button>
      </div>

      <div className='flex flex-row justify-between'>

        <div className='flex flex-col'>
          <div className='font-bold'>Apple</div>
          <div>Link your Google account to seamlessly use your contact list.</div>
        </div>

        <button className='w-[250px] h-[50px] border-white bg-black text-white rounded-xl border-[2px] text-center'>
          Continue with Apple.
        </button>
      </div>

    </div>
  )
}

export default YourProfile