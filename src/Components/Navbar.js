import { useState, React } from 'react'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [location, setLocation] = useState('Pune')

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='w-full bg-black text-white h-14 flex items-center justify-between px-8 text-lg'>
            <div className='font-bold'>TheSuperBikeProject</div>

            <div className="relative inline-block text-left">
                <button
                    id="dropdownHoverButton"
                    onClick={toggleDropdown}
                    type="button"
                    className="text-white bg-black border-red-500 border-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                >
                    📍 {location}
                </button>

                <div
                    id="dropdownHover"
                    className={`${isDropdownOpen ? 'block' : 'hidden'
                        } z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        <li>
                            <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>{setLocation('Mumbai')}}>
                             Mumbai
                            </div>
                        </li>

                        <li>
                            <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>{setLocation('Pune')}}>
                                Pune
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div><input className='w-[450px] bg-gray-600 p-2 rounded-xl text-sm' placeholder='Find Your Bike...' /></div>
            <div>Home</div>
            <div>Store</div>
            <div>TSBP One</div>
            <div>Events</div>
            <div>News</div>
            <div>Login</div>
        </div>
    )
}

export default Navbar