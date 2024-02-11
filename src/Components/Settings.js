import React, { useState } from 'react';
// import Privacy from './Privacy';
import Notifications from './Notifications';
import Privacy from './Privacy';

const Settings = () => {
    const [option, setOption] = useState('notif');
    
    return (
        <div className='flex flex-row bg-white rounded-xl'>
            <div className='rounded-xl p-5 flex flex-col space-y-5 items-start w-[12%]'>
                <div className='flex flex-col p-5 bg-white w-[20%] space-y-4 rounded-xl items-center m-5'>
                    <button
                        className={`w-[100px] h-[50px] ${option === 'notif' ? 'bg-black text-white' : 'bg-gray-300 text-black'} p-2 rounded-xl text-sm`}
                        onClick={() => setOption('notif')}>
                        Notifications
                    </button>
                    <button
                        className={`w-[100px] h-[50px] ${option === 'privacy' ? 'bg-black text-white' : 'bg-gray-300 text-black'} p-2 rounded-xl text-sm`}
                        onClick={() => setOption('privacy')}>
                        Privacy
                    </button>
                    <button
                        className={`w-[100px] h-[50px] ${option === 'deleteAccount' ? 'bg-black text-white' : 'bg-gray-300 text-black'} p-2 rounded-xl text-sm`}
                        onClick={() => setOption('deleteAccount')}>
                        Delete Account
                    </button>
                    <button
                        className={`w-[100px] h-[50px] ${option === 'deleteAccount' ? 'bg-black text-white' : 'bg-gray-300 text-black'} p-2 rounded-xl text-sm`}
                        onClick={() => setOption('deleteAccount')}>
                        Delete Account
                    </button>
                </div>
            </div>

            {option === 'privacy' && <Privacy />}
            {option === 'notif' && <Notifications />}
        
        </div>
    )
}

export default Settings