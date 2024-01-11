import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-black text-white flex flex-col items-center p-4 space-y-12'>
            <div className='flex flex-row items-cente justify-around w-full'>
                <div className='flex flex-col'>
                    <div className='text-2xl font-bold'>The</div>
                    <div className='text-2xl font-bold'>SuperBike</div>
                    <div className='text-2xl font-bold'>Project</div>
                    <div>For the love of superbikes</div>
                </div>

                <div className='flex flex-row justify-evenly w-1/2'>

                    <div className='flex flex-col justify-evenly'>
                        <div className='font-bold'>Links</div>
                        <div className='text-xs'>
                            <div>Home</div>
                            <div>Store</div>
                            <div>Events</div>
                            <div>About</div>
                        </div>

                    </div>

                    <div className='flex flex-col justify-evenly'>
                        <div className='font-bold'>Links</div>
                        <div className='text-xs'>
                            <div>Contact Us</div>
                            <div>Help Center</div>
                            <div>Become a seller</div>
                            <div>Advertise</div>
                        </div>

                    </div>

                    <div className='flex flex-col justify-evenly'>
                        <div className='font-bold'>Consumer Policy</div>
                        <div className='text-xs'>
                            <div>Terms of Use</div>
                            <div>Privacy policy</div>
                            <div>Sitemap</div>
                            <div>Grievance Redressal</div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly'>
                        <div className='font-bold'>Socials</div>
                        <div className='text-xs'>
                            <div>Instagram</div>
                            <div>Twitter</div>
                            <div>YouTube</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>All Rights Reserved © The Super Bike Project</div>
        </div>
    )
}

export default Footer