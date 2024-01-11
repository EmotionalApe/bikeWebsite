import React from 'react'
import BikeCard from './BikeCard'

const FeaturedBikes = () => {
    return (
        <div className='my-5 flex flex-row space-x-6'>
            <BikeCard
                details={{
                    size: 10,
                    bikeName: 'Ducati Diavel',
                    bikeYear: 2023,
                    location: 'Aundh, Pune',
                    kms: 24400,
                    owner: 2,
                    bs: 4,
                    emi: 9400,
                    price: 1850000
                }} />

            <BikeCard
                details={{
                    size: 10,
                    bikeName: 'Ducati Diavel',
                    bikeYear: 2023,
                    location: 'Aundh, Pune',
                    kms: 24400,
                    owner: 2,
                    bs: 4,
                    emi: 9400,
                    price: 1850000
                }} />

            <BikeCard
                details={{
                    size: 10,
                    bikeName: 'Ducati Diavel',
                    bikeYear: 2023,
                    location: 'Aundh, Pune',
                    kms: 24400,
                    owner: 2,
                    bs: 4,
                    emi: 9400,
                    price: 1850000
                }} />

            <BikeCard
                details={{
                    size: 10,
                    bikeName: 'Ducati Diavel',
                    bikeYear: 2023,
                    location: 'Aundh, Pune',
                    kms: 24400,
                    owner: 2,
                    bs: 4,
                    emi: 9400,
                    price: 1850000
                }} />

        </div>
    )
}

export default FeaturedBikes