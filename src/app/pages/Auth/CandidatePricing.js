import React from 'react';
import PricingComponent from './PricingComponent';

const CandidatePricing = () => {
    return <div className="w-full flex flex-col justify-center">
        <h1 className="text-2xl text-center pt-5">Choose a Candidate Price Plan</h1>
        <div className="flex flex-col mx-auto w-full md:w-5/12 ">
            <PricingComponent />
        </div>
    </div>
}

export default CandidatePricing