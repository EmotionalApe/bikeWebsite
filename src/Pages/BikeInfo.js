import React from 'react'
import Navbar from '../Components/Navbar'
import SubNav from '../Components/SubNav'
import Gallery from '../Components/Gallery'
import ReviewCard from '../Components/ReviewCard'
import NewsCard from '../Components/NewsCard'

const BikeInfo = () => {
    return (
        <div className='bg-gray-300'>
            <Navbar />
            <SubNav />

            {/* gallery, specs, reviews */}
            <div className='flex justify-evenly'>
                <div className='w-3/4 h-4/5 bg-white p-3 rounded-xl'>
                    <Gallery images={['https://w0.peakpx.com/wallpaper/433/525/HD-wallpaper-2020-verge-ts-bike-bikes.jpg',
                        'https://i.pinimg.com/564x/72/71/87/7271871d960c4ace4c2adc93327d734c.jpg',
                        'https://stat.overdrive.in/wp-content/odgallery/2022/08/63809_2022_Royal_Enfield_Hunter_350_468x263.jpg']} />

                    <div>Top Specs</div>
                    <div className='w-full h-[60px] bg-white rounded-xl border-2 border-gray-500 flex items-center justify-evenly my-2'>
                        <div className='flex flex-col'>
                            <div>Engine Capacity</div>
                            <div className='font-bold'>1198.6 cc</div>
                        </div>

                        <div className='flex flex-col'>
                            <div>Transmission</div>
                            <div className='font-bold'>6 Speed Manual</div>
                        </div>

                        <div className='flex flex-col'>
                            <div>Kerb Weight</div>
                            <div className='font-bold'>239 kg</div>
                        </div>

                        <div className='flex flex-col'>
                            <div>Fuel Tank</div>
                            <div className='font-bold'>17 Liters</div>
                        </div>

                        <div className='flex flex-col'>
                            <div>Seat Height</div>
                            <div className='font-bold'>770 mm</div>
                        </div>

                        <div className='flex flex-col'>
                            <div>Max Power</div>
                            <div className='font-bold'>159.6 bhp</div>
                        </div>
                    </div>
                </div>

                <div className='w-1/5'>
                    <div className='w-full h-[180px] flex flex-col justify-evenly bg-white rounded-xl my-5'>
                        <div className='font-bold mx-6 text-lg'>Ducati Diavel</div>
                        <div className='mx-6'>Rs 16.10 lakh </div>
                        <div className='flex flex-row mx-6 space-x-12'>
                            <div className=''>⭐ 4.4</div>
                            <div>20 Reviews</div>
                        </div>
                    </div>
                    <div className='w-full h-[380px] bg-white rounded-xl my-5'>
                        Ad
                    </div>
                </div>
            </div>

            <div className='flex flex-row'>

                {/* Specs and features */}
                <div className='flex flex-col w-3/4 mx-6 text-sm bg-white rounded-xl'>
                    <div className='bg-gray-400 py-3 px-12 text-lg font-bold rounded-t-xl'>Specs and Features</div>

                    <div className='w-full p-5 space-y-4'>

                        <div className='flex flex-col w-[60%] mx-auto'>
                            <div className='font-bold'>Performance</div>

                            <div className='flex flex-row justify-between space-x-52'>
                                <div>Displacement</div>
                                <div>1198.4 cc</div>
                            </div>
                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Max Power</div>
                                <div>156.5 bhp @ 9250 rpm</div>
                            </div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Max Torque</div>
                                <div>130.5 Nm @ 8000 rpm</div>
                            </div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Mileage - ARAI</div>
                                <div>-</div>
                            </div>
                        </div>


                        <div className='flex flex-col w-[60%] mx-auto'>
                            <div className='font-bold'>Break, Wheels & Suspension</div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Front Suspension</div>
                                <div>Marzocchi fully adjustable 50 mm usd fork with DLC</div>
                            </div>
                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Rear Suspension</div>
                                <div>Fully adjustable rear shock with progressive linka</div>
                            </div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Braking System</div>
                                <div>Dual Channel ABS</div>
                            </div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Front Brake Type</div>
                                <div>Disc</div>
                            </div>
                        </div>


                        <div className='flex flex-col w-[60%] mx-auto'>
                            <div className='font-bold'>Dimensions & Chassis</div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Kerb Weight</div>
                                <div>239 kg</div>
                            </div>
                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Seat Height</div>
                                <div>770 mm</div>
                            </div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Ground Clearance</div>
                                <div>130 mm</div>
                            </div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Overall Length</div>
                                <div>-</div>
                            </div>
                        </div>

                        <div className='flex flex-col w-[60%] mx-auto'>
                            <div className='font-bold'>Features</div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Odometer</div>
                                <div>Digital</div>
                            </div>
                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Speedometer</div>
                                <div>Digital</div>
                            </div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Fuel Gauge</div>
                                <div>Yes</div>
                            </div>

                            <div className='flex flex-row justify-between space-x-48'>
                                <div>Digital Fuel Gauge</div>
                                <div>Yes</div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* About the bike */}
                <div className='flex flex-col w-1/5 bg-gray-100 rounded-xl p-4 space-y-5'>
                    <div className='font-bold'>About the Ducati Diavel</div>
                    <p className='text-sm'>With the Diavel, Ducati has tried to approach cross-country cruising with a different angle. Calling it a power cruiser, the Diavel is a cross between the classic laid back cruisers and the modern sport tourers and sports a naked body style. Ducati also has introduced a more cruiser-like iteration and calls it the X-Diavel, but that is a different motorcycle. </p>

                    <p className='text-sm'>In terms of design and styling, the Diavel stands out with its bulky and macho look. The exposed trellis frame makes it look raw while the smart curves around the tank and the fascia give it a sporty touch. The Diavel Carbon, the performance version of the Diavel, sheds some weight thanks to the lightweight composites (read carbon-fibre) and machined aluminium.</p>
                </div>

            </div>

            <div className='flex flex-col space-x-5 m-8'>
                <div className='my-3 mx-7'>User Reviews</div>

                <div className='flex flex-row space-x-5'>
                    <ReviewCard
                        details={{
                            imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                            profileName: 'John Doe',
                            revTitle: 'India bound Ducati Diavel revealed',
                            revBody: 'Ducati has updated its product portfolio and revealed the new Diavel V4 for the international markets. This power cruiser will also enter India, but its launch details are not available yet.',
                        }} />

                    <ReviewCard
                        details={{
                            imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                            profileName: 'John Doe',
                            revTitle: 'India bound Ducati Diavel revealed',
                            revBody: 'Ducati has updated its product portfolio and revealed the new Diavel V4 for the international markets. This power cruiser will also enter India, but its launch details are not available yet.',
                            revImage: 'https://i.pinimg.com/originals/64/a5/92/64a5923a87f1a724a0b2f5ea1535dcab.png'
                        }} />
                    <ReviewCard
                        details={{
                            imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                            profileName: 'John Doe',
                            revTitle: 'India bound Ducati Diavel revealed',
                            revBody: 'Ducati has updated its product portfolio and revealed the new Diavel V4 for the international markets. This power cruiser will also enter India, but its launch details are not available yet.',
                            revImage: 'https://i.pinimg.com/originals/64/a5/92/64a5923a87f1a724a0b2f5ea1535dcab.png'
                        }} />
                </div>
            </div>


            <div className='flex flex-col space-x-5 m-8'>
                <div className='my-3 mx-8'>Ducati Diavel News</div>

                <div className='flex flex-row space-x-5'>
                    <NewsCard details={{
                        newsImg:'https://banner2.cleanpng.com/20180615/ywp/kisspng-ducati-multistrada-1200-ducati-diavel-motorcycle-v-ducati-diavel-5b233b22006ff4.7986488015290355540018.jpg',
                        newsTitle : 'India bound Ducati Diavel revealed',
                        newsBody : 'Ducati has updated its product portfolio and revealed the new Diavel V4 for the international markets. This power cruiser will also enter India, but its launch details are not available yet.'
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default BikeInfo