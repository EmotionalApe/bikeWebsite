import React from 'react';
import { useState, useEffect } from 'react'
import Footer from '../Components/Footer'

const Home = () => {

    const eventImages = [
        require('../Images/Hero/event1.png'),
        require('../Images/Hero/event2.png'),
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
        }, 3000);

        
        return () => clearInterval(interval);
    }, [currentImageIndex, eventImages.length]);

    return (
        <div className='relative bg-black'>
            <div className='fixed top-0 w-full bg-black bg-opacity-0 text-white h-14 flex items-center justify-between px-8 text-lg z-10'>
                <div className='font-bold'>TheSuperBikeProject</div>
                <div className='flex flex-row space-x-10'>
                    <div className='flex flex-row space-x-4 border-gray-500 border-[1px] px-4 rounded-lg bg-black/[0.5]'>
                        <div>Home</div>
                        <div>Store</div>
                        <div>TSBP One</div>
                        <div>Events</div>
                        <div>News</div>
                    </div>

                    <div className='flex flex-row space-x-4 border-gray-500 border-[1px] px-4 rounded-lg'>Login</div>
                </div>
            </div>

            <div className='relative w-full'>
                <img
                    className='w-full h-screen object-cover opacity-60'
                    src={require('../Images/Hero/hero1.jpeg')}
                    alt='bike1'
                />
                <div className='absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex flex-col justify-start'>
                    <div className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Unlock The Ride of Your Dreams</div>
                    <div className='text-[15px]'>Find the bike of your dreams with TheSuperBikeProject today</div>
                    <button className='bg-blue-700 w-[100px] p-1 text-[20px] rounded-lg font-normal'>Store</button>
                </div>
            </div>
            <div className='relative w-full'>
                <img
                    className='w-full h-screen object-cover opacity-60'
                    src={require('../Images/Hero/hero2.jpeg')}
                    alt='bike2'
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex flex-col text-center'>
                    <div className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Fuel your soul with the roar of the engine. Two wheels, one passion.</div>
                </div>
            </div>

            <div className='relative w-full'>
                <img
                    className='w-full h-screen object-cover opacity-60'
                    src={require('../Images/Hero/hero3.jpeg')}
                    alt='bike2'
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex flex-row text-center space-x-10'>
                    <div className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Join Us at some of the most exhilarating motorcycling Events in India.</div>

                    <div className=''>
                        <img
                            className='w-[300px] h-[300px] object-fit'
                            src={eventImages[currentImageIndex]}
                            alt={`event-${currentImageIndex}`}
                        />
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
