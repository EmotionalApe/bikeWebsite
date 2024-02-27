import React, { useState, useEffect } from 'react';
import BikeCard from '../Components/BikeCard';

const BikeCatalogue = () => {
    const brands = ["BMW", "Ducati", "Yamaha", "Bajaj"];
    const bikeDetails = {
        1: {
            bikeName: 'Ducati Diavel',
            bikeYear: 2023,
            location: 'Aundh, Pune',
            kms: 24400,
            owner: 2,
            bs: 4,
            emi: 9400,
            price: 1850000
        },
        2: {
            bikeName: 'BMW S1000RR',
            bikeYear: 2022,
            location: 'Koramangala, Bangalore',
            kms: 18000,
            owner: 1,
            bs: 3,
            emi: 8700,
            price: 1950000
        },
        3: {
            bikeName: 'Yamaha YZF R1',
            bikeYear: 2021,
            location: 'Jubilee Hills, Hyderabad',
            kms: 12000,
            owner: 1,
            bs: 4,
            emi: 8000,
            price: 1650000
        },
        4: {
            bikeName: 'Ducati Panigale V2',
            bikeYear: 2020,
            location: 'Indiranagar, Bangalore',
            kms: 15000,
            owner: 2,
            bs: 2,
            emi: 7200,
            price: 1750000
        },
        5: {
            bikeName: 'Bajaj Dominar 400',
            bikeYear: 2019,
            location: 'Viman Nagar, Pune',
            kms: 22000,
            owner: 1,
            bs: 3,
            emi: 4500,
            price: 1250000
        },
        6: {
            bikeName: 'Ducati Monster 821',
            bikeYear: 2018,
            location: 'Marathahalli, Bangalore',
            kms: 28000,
            owner: 2,
            bs: 2,
            emi: 6700,
            price: 1550000
        },
        7: {
            bikeName: 'Yamaha MT-09',
            bikeYear: 2022,
            location: 'Kalyani Nagar, Pune',
            kms: 15000,
            owner: 1,
            bs: 4,
            emi: 7800,
            price: 1700000
        },
        8: {
            bikeName: 'BMW R 1250 GS Adventure',
            bikeYear: 2023,
            location: 'Koramangala, Bangalore',
            kms: 10000,
            owner: 1,
            bs: 3,
            emi: 9800,
            price: 2050000
        },
        9: {
            bikeName: 'Bajaj Pulsar NS200',
            bikeYear: 2021,
            location: 'Jubilee Hills, Hyderabad',
            kms: 18000,
            owner: 1,
            bs: 4,
            emi: 3800,
            price: 950000
        },
        10: {
            bikeName: 'Yamaha FZ25',
            bikeYear: 2020,
            location: 'Viman Nagar, Pune',
            kms: 20000,
            owner: 2,
            bs: 3,
            emi: 5500,
            price: 1150000
        }
    };



    const [selectedBrands, setSelectedBrands] = useState([]);
    const [budgetMin, setBudgetMin] = useState(200000);
    const [budgetMax, setBudgetMax] = useState(2000000);
    const [yearMin, setYearMin] = useState(2018);
    const [yearMax, setYearMax] = useState(2024);
    const [filteredBikes, setFilteredBikes] = useState([]);


    useEffect(() => {
        const filteredBikes = Object.values(bikeDetails).filter(bike => {

            if (selectedBrands.length > 0 && !selectedBrands.includes(bike.bikeName.split(' ')[0])) {
                return false;
            }

            if (bike.price < budgetMin || bike.price > budgetMax) {
                return false;
            }

            if (bike.bikeYear < yearMin || bike.bikeYear > yearMax) {
                return false;
            }
            return true;
        });
        setFilteredBikes(filteredBikes);
    }, [selectedBrands, budgetMin, budgetMax, yearMin, yearMax, bikeDetails]);


    const handleBrandChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(item => item !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    return (
        <div className='w-full'>


            <div className='w-full bg-black text-white h-14 flex items-center justify-between px-8 text-lg'>
                <div className='font-bold'>TheSuperBikeProject</div>

                <div className='flex flex-row space-x-10'>
                    <div>Bike Selector</div>
                    <div>Store</div>
                    <div>Bike Services</div>
                    <div>About</div>
                </div>
            </div>

            <div className='flex flex-row justify-center'>

                <div className='w-[20%] border-r-2 border-gray-400 flex flex-col space-y-8 pt-16'>

                    <div>
                        <h2 className='font-bold'>Make</h2>
                        <div className=''>
                            {brands.map((brand, index) => (
                                <div key={index} className='flex flex-row space-x-3'>
                                    <label htmlFor={brand}>{brand}</label>
                                    <input
                                        type='checkbox'
                                        id={brand}
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => handleBrandChange(brand)}
                                    />
                                </div>
                            ))}

                        </div>
                    </div>


                    <div>
                        <h2 className='font-bold'>Budget</h2>
                        <div className='flex flex-col space-y-1'>
                            <div>
                                <label htmlFor="minBudget">Min:</label>
                                <input
                                    className='rounded-xl pl-3 bg-gray-300 m-2 w-28'
                                    type='number'
                                    id="minBudget"
                                    value={budgetMin}
                                    onChange={(e) => setBudgetMin(parseInt(e.target.value))}
                                />
                            </div>
                            <div>
                                <label htmlFor="maxBudget">Max:</label>
                                <input
                                    className='rounded-xl pl-3 bg-gray-300 m-2 w-28'
                                    type='number'
                                    id="maxBudget"
                                    value={budgetMax}
                                    onChange={(e) => setBudgetMax(parseInt(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-bold'>Model Year</h2>
                        <div>
                            <label htmlFor="minYear">Min:</label>
                            <input
                                className='rounded-xl pl-3 bg-gray-300 m-2 w-28'
                                type='number'
                                id="minYear"
                                value={yearMin}
                                onChange={(e) => setYearMin(parseInt(e.target.value))}
                            />
                        </div>
                        <div>
                            <label htmlFor="maxYear">Max:</label>
                            <input
                                className='rounded-xl pl-3 bg-gray-300 m-2 w-28'
                                type='number'
                                id="maxYear"
                                value={yearMax}
                                onChange={(e) => setYearMax(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                </div>


                <div className='w-[75%] flex flex-row flex-wrap'>
                    {filteredBikes.map((bike, index) => (
                        <BikeCard key={index} details={bike} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BikeCatalogue;
