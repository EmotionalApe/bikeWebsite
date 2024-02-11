import { React, useState } from 'react'

const BikeForm1 = () => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        version: '',
        yearOfManufacturing: '',
        kmsRidden: '',
        city: '',
        expectedPrice: '',
        owner: '',
        registration: '',
        colour: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row space-x-6 p-3'>

                <div className='rounded-full w-[130px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-red-500'></div>
                    <div className='text-sm'>Basic Details</div>
                </div>


                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-black'></div>
                    <div className='text-sm'>Condition Details</div>
                </div>

                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-black'></div>
                    <div className='text-sm'>Photos</div>
                </div>

                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-black'></div>
                    <div className='text-sm'>Expected Price</div>
                </div>

            </div>

            <div className='flex flex-col mx-auto'>
                <div className='text-center font-bold text-lg'>Basic Details</div>

                <div className='flex flex-row justify-evenly'>
                    <input
                        className='w-[300px] h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                        placeholder='Brand'
                        name='brand'
                        value={formData.brand}
                        onChange={handleInputChange}
                    />
                    <input
                        className='w-[300px] h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                        placeholder='Model'
                        name='model'
                        value={formData.model}
                        onChange={handleInputChange}
                    />
                    <input
                        className='w-[300px] h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                        placeholder='Version'
                        name='version'
                        value={formData.version}
                        onChange={handleInputChange}
                    />
                </div>

                <input
                    className='w-full h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                    placeholder='Year of Manufacturing'
                    name='yearOfManufacturing'
                    value={formData.yearOfManufacturing}
                    onChange={handleInputChange}
                />

                <input
                    className='w-full h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                    placeholder='Kms ridden'
                    name='kmsRidden'
                    value={formData.kmsRidden}
                    onChange={handleInputChange}
                />

                <input
                    className='w-full h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                    placeholder='City'
                    name='city'
                    value={formData.city}
                    onChange={handleInputChange}
                />

                <input
                    className='w-full h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                    placeholder='Expected Price'
                    name='expectedPrice'
                    value={formData.expectedPrice}
                    onChange={handleInputChange}
                />

                <input
                    className='w-full h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                    placeholder='Owner'
                    name='owner'
                    value={formData.owner}
                    onChange={handleInputChange}
                />

                <input
                    className='w-full h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                    placeholder='Registration'
                    name='registration'
                    value={formData.registration}
                    onChange={handleInputChange}
                />

                <input
                    className='w-full h-[40px] bg-gray-100 px-2 rounded-xl m-2'
                    placeholder='Colour'
                    name='colour'
                    value={formData.colour}
                    onChange={handleInputChange}
                />

            </div>

            <button className='w-[200px] h-[50px] bg-red-500 border-[1px] m-4 border-white text-center rounded-lg p-2 text-white'>
                Save
            </button>
        </div>
    )
}

export default BikeForm1