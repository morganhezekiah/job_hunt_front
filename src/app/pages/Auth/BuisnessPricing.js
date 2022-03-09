import React from 'react'
import PricingComponent from './PricingComponent'


const BusinessPricing = () => {
    const paymentIndexList = [0, 1, 2];

    return <div className="">
        <h1 className="text-2xl text-center pt-5">Choose a Buisness Plan</h1>
        <div className="flex flex-col md:flex-row ">
            {
                paymentIndexList.map(index => (
                    <PricingComponent index={index} key={index} />
                ))
            }
        </div>
    </div>
}

export default BusinessPricing;