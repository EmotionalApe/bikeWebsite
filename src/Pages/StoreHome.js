import React from 'react'
import Navbar from '../Components/Navbar'
import SubNav from '../Components/SubNav'
import Categories from '../Components/Categories'
import Carousel from '../Components/Carousel'
import FeaturedBikes from '../Components/FeaturedBikes'
import Footer from '../Components/Footer'

const StoreHome = () => {
  return (
    <div className='bg-gray-200'>
      <Navbar />
      <SubNav />
      <Categories />
      <Carousel />
      <FeaturedBikes />


      <div className='font-bold mx-5'>Motorcycle Gear</div>
      <div className='flex flex-row space-x-6 m-5'>
        
        <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
          <img src={require('../Images/Gear/image (3).png')} alt='gear1' />
          <div className='my-2'>Gloves</div>
        </div>

        <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
          <img src={require('../Images/Gear/image (4).png')} alt='gear2' />
          <div className='my-2'>Knee guards</div>
        </div>


        <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
          <img src={require('../Images/Gear/image (5).png')} alt='gear3' />
          <div className='my-2'>Shoes</div>
        </div>


        <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
          <img src={require('../Images/Gear/image (6).png')} alt='gear4' />
          <div className='my-2'>Suit</div>
        </div>


        <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
          <img src={require('../Images/Gear/image (7).png')} alt='gear5' />
          <div className='my-2'>Riding Jacket</div>
        </div>

        <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
          <img src={require('../Images/Gear/image (8).png')} alt='gear6' />
          <div className='my-2'>Helmets</div>
        </div>

        <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
          <img src={require('../Images/Gear/image (9).png')} alt='gear6' />
          <div className='my-2'>Pants</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default StoreHome