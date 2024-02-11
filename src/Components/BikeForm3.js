import React, { useState } from "react";

const BikeForm3 = () => {
    const [imageUrls, setImageUrls] = useState({
        Front: "",
        Right: "",
        Left: "",
        Back: "",
        FuelTank: "",
        Odometer: "",
        Exhaust: "",
    });

    const handleImageChange = (event, section) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setImageUrls((prevUrls) => ({
            ...prevUrls,
            [section]: imageUrl,
        }));
    };

    const handleRemoveImage = (section) => {
        setImageUrls((prevUrls) => ({
            ...prevUrls,
            [section]: "",
        }));
    };

    return (
        <div>
            <div className='flex flex-row space-x-6 p-3'>

                {/* Your other sections here */}

            </div>

            <div className="flex flex-wrap justify-center">
                {Object.entries(imageUrls).map(([section, url]) => (
                    <div key={section} className="text-xs bg-gray-300 m-2 p-3 rounded-xl flex flex-col justify-center items-center">
                         <div className="text-center text-base font-bold">{section}</div>
                        <div className="w-[200px] h-[200px] border border-gray-300 rounded-md overflow-hidden mb-4">
                            {url ? (
                                <img
                                    alt={`${section}`}
                                    src={url}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-400"></div>
                            )}
                        </div>
                        <div className="flex flex-col">
                           
                            <input
                                type="file"
                                onChange={(event) => handleImageChange(event, section)}
                            />
                            <button className='bg-red-300 mx-auto p-2 rounded-lg' onClick={() => handleRemoveImage(section)}>Remove</button>
                        </div>
                    </div>
                ))}

            </div>

            <button className='w-[200px] h-[50px] bg-red-500 border-[1px] m-4 border-white text-center rounded-lg p-2 text-white'>
                Save
            </button>

        </div>
    );
};

export default BikeForm3;
