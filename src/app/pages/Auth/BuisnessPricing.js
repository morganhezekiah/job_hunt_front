import React from 'react'
import PricingComponent from './PricingComponent'


const Pricing = () => {
    return <div className="">
        <h1 className="text-2xl text-center pt-5">Choose a Buisness Plan</h1>
        <div className="flex flex-col md:flex-row">
            <PricingComponent/>
            <PricingComponent/>
            <PricingComponent/>
        </div>
    </div>
}

export default Pricing