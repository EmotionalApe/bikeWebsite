import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import SubNav from '../Components/SubNav'
import Gallery from '../Components/Gallery'


const ProductListing = () => {
    const [showSeller, setShowSeller] = useState(false)

    return (
        <div className='bg-gray-300'>
            <Navbar />
            <SubNav />
            
            {/* gallery, seller, ad section */}
            <div className='flex justify-evenly'>
                <div className='w-3/4 h-4/5 bg-white p-3 rounded-xl'>
                    <Gallery images={['https://w0.peakpx.com/wallpaper/433/525/HD-wallpaper-2020-verge-ts-bike-bikes.jpg',
                        'https://i.pinimg.com/564x/72/71/87/7271871d960c4ace4c2adc93327d734c.jpg',
                        'https://stat.overdrive.in/wp-content/odgallery/2022/08/63809_2022_Royal_Enfield_Hunter_350_468x263.jpg']} />

                    <div className='w-full h-[60px] bg-white rounded-xl border-2 border-gray-500 flex items-center justify-evenly my-2'>
                        <div className='flex space-x-1'>
                            <div>Year</div>
                            <div className='font-bold'>2019</div>
                        </div>

                        <div className='flex space-x-1'>
                            <div>Brand</div>
                            <div className='font-bold'>Ducati</div>
                        </div>

                        <div className='flex space-x-1'>
                            <div>Model</div>
                            <div className='font-bold'>Diavel</div>
                        </div>

                        <div className='flex space-x-1'>
                            <div>KMs Driven</div>
                            <div className='font-bold'>19000</div>
                        </div>

                        <div className='flex space-x-1'>
                            <div>Owners</div>
                            <div className='font-bold'>1</div>
                        </div>

                        <div className='flex space-x-1'>
                            <div>Location</div>
                            <div className='font-bold'>Pune</div>
                        </div>

                        <div className='flex space-x-1'>
                            <div>Registration</div>
                            <div className='font-bold'>MH14</div>
                        </div>
                    </div>

                    <div className='w-full h-[60px] bg-gray-100 rounded-xl flex-col px-5 py-1'>
                        <div className='font-bold'>Condition Report</div>
                        <div>Bike in excellent condition, very minor dent on lower side of exhaust (not visible unless seen from bottom)</div>
                    </div>
                </div>

                <div className='w-1/5'>

                    {showSeller ?
                        <div className='w-full h-[200px] flex flex-col justify-evenly bg-white rounded-xl my-5'>
                            <div className='flex flex-row justify-around'>
                                <div>Buy it now at</div>
                                <div>Rs 8,45,000</div>
                            </div>
                            <div className='flex flex-row mx-auto space-x-4'>
                                <div className='w-[30px] h-[30px] rounded-full bg-gray-300'></div>
                                <div>Superbike Motors, Pune</div>
                            </div>
                            <div className='flex flex-row text-center mx-auto space-x-3 text-white'>
                                <button className='bg-[#00A3FF] p-2 rounded-l-full w-[100px]'>Call Now</button>
                                <button className='bg-[#04B200] p-2 rounded-r-full w-[100px]'>Chat</button>
                            </div>
                            <button className='bg-black text-white font-bold text-lg text-center rounded-full w-3/4 mx-auto p-2'>Get Store Directions</button>
                        </div> :
                        <div className='w-full h-[200px] flex flex-col justify-evenly bg-white rounded-xl my-5'>
                            <div className='flex flex-row justify-around'>
                                <div>Buy it now at</div>
                                <div>Rs 8,45,000</div>
                            </div>
                            <button onClick={()=>setShowSeller(true)} className='bg-black text-white font-bold text-lg text-center rounded-full w-3/4 mx-auto p-2'>Get Seller Contact</button>
                        </div>}



                    <div className='w-full h-[380px] bg-white rounded-xl my-5'>
                        Ad
                    </div>
                </div>




            </div>

            {/* about bike section*/}
            <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-between w-[97%] mx-auto my-3'>
                    <div className='font-bold'>About the Ducati Diavel</div>
                    <div>All details</div>
                </div>

                <div className='flex flex-row w-[97%] h-[300px] mx-auto bg-white rounded-xl p-5'>
                    <div className='bg-gray-100 rounded-xl w-[40%] m-2'>
                        <div className='p-3'>
                            With the Diavel, Ducati has tried to approach cross-country cruising with a different angle. Calling it a power cruiser, the Diavel is a cross between the classic laid back cruisers and the modern sport tourers and sports a naked body style. Ducati also has introduced a more cruiser-like iteration and calls it the X-Diavel, but that is a different motorcycle.
                        </div>

                        <div className='p-3'>More Details</div>

                    </div>

                    <div className='flex flex-col w-[40%] justify-center'>
                        <div className='flex flex-row justify-around'>
                            <div>Engine Capacity</div>
                            <div className='font-bold'>1198.4 cc</div>
                        </div>

                        <div className='flex flex-row justify-around'>
                            <div>Transmission</div>
                            <div className='font-bold'>6 Speed manual</div>
                        </div>


                        <div className='flex flex-row justify-around '>
                            <div>Kerb Weight</div>
                            <div className='font-bold'>239 kg</div>
                        </div>

                        <div className='flex flex-row justify-around'>
                            <div>Fuel Tank Capacity</div>
                            <div className='font-bold'>17 Litres</div>
                        </div>

                        <div className='flex flex-row justify-around'>
                            <div>Seat Height</div>
                            <div className='font-bold'>770 mm</div>
                        </div>

                        <div className='flex flex-row justify-around'>
                            <div>Max Power</div>
                            <div className='font-bold'>159.5 bhp</div>
                        </div>

                    </div>

                </div>
            </div>
            
            {/* Motocycle gear section */}
            <div className='flex flex-col w-[97%] mx-auto my-5'>
                <div className='font-bold'>Motorcycle Gear</div>
                <div className='my-5'>Find inspiration for your perfect gear</div>

                <div className='flex flex-row space-x-6'>
                    <img className='w-[300px] h-[300px]' src={require('../Images/Gear/image.png')} alt='bike1'/>
                    <img className='w-[300px] h-[300px]' src={require('../Images/Gear/image (1).png')} alt='bike2'/>
                    <img className='w-[300px] h-[300px]' src={require('../Images/Gear/image (2).png')} alt='bike3'/>
                    <img className='w-[300px] h-[300px]' src={require('../Images/Gear/image.png')} alt='bike1'/>
                </div>

                <div className='flex flex-row space-x-6 my-10'>
                    <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
                        <img src={require('../Images/Gear/image (3).png')} alt='gear1'/>
                        <div className='my-2'>Gloves</div>
                    </div>

                    <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
                        <img src={require('../Images/Gear/image (4).png')} alt='gear2'/>
                        <div className='my-2'>Knee guards</div>
                    </div>


                    <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
                        <img src={require('../Images/Gear/image (5).png')} alt='gear3'/>
                        <div className='my-2'>Shoes</div>
                    </div>


                    <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
                        <img src={require('../Images/Gear/image (6).png')} alt='gear4'/>
                        <div className='my-2'>Suit</div>
                    </div>


                    <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
                        <img src={require('../Images/Gear/image (7).png')} alt='gear5'/>
                        <div className='my-2'>Riding Jacket</div>
                    </div>

                    <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
                        <img src={require('../Images/Gear/image (8).png')} alt='gear6'/>
                        <div className='my-2'>Helmets</div>
                    </div>

                    <div className='w-[160px] h-[150px] bg-white p-5 rounded-xl flex flex-col items-center justify-center'>
                        <img src={require('../Images/Gear/image (9).png')} alt='gear6'/>
                        <div className='my-2'>Pants</div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProductListing