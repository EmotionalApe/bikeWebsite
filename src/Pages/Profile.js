import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import YourProfile from '../Components/YourProfile';
import Settings from '../Components/Settings';
import SellBike from '../Components/SellBike';

const Profile = () => {
    const [option, setOption] = useState('profile');

    return (
        <div>
            <Navbar />
            <div className='m-6 flex flex-row'>
                <div className='flex flex-col p-5 bg-white w-[20%] space-y-4 rounded-xl items-center m-5'>
                    <button
                        className={`w-[250px] h-[50px] ${option === 'profile' ? 'bg-black text-white' : 'bg-gray-300 text-black'} p-2 rounded-xl text-sm`}
                        onClick={() => setOption('profile')}>
                        Profile
                    </button>
                    <button
                        className={`w-[250px] h-[50px] ${option === 'sell' ? 'bg-black text-white' : 'bg-gray-300 text-black'} p-2 rounded-xl text-sm`}
                        onClick={() => setOption('sell')}>
                        Sell Your bike
                    </button>
                    <button
                        className={`w-[250px] h-[50px] ${option === 'settings' ? 'bg-black text-white' : 'bg-gray-300 text-black'} p-2 rounded-xl text-sm`}
                        onClick={() => setOption('settings')}>
                        Settings
                    </button>
                    <button
                        className={`w-[250px] h-[50px] ${option === 'help' ? 'bg-black text-white' : 'bg-gray-300 text-black'} p-2 rounded-xl text-sm`}
                        onClick={() => setOption('help')}>
                        Help
                    </button>
                </div>

                <div className='w-[75%] p-5'>
                    {option === 'profile' && <YourProfile />}
                    {option === 'settings' && <Settings />}
                    {option === 'sell' && <SellBike/>}
                </div>

            </div>
        </div>
    );
};

export default Profile;
