import React from 'react';

const PricingComponent = () => {
    
    return <>
        <section className="m-20 sm:mx-48 md:mx-6 lg:mx-14 xl:mx-20 basis-1/3">
          <div className=" rounded-md shadow-md border-lime-600 border-2">
            <div className="py-6 text-center shadow-md">
              <h1 className="text-2xl font-semibold">BASIC</h1>
              <h1 className="py-6 text-xl">#5000</h1>
            </div>
            <div className="py-6 text-center shadow-md border-current">
              <h2>4 GB Ram</h2>
            </div>
            <div className="py-6 shadow-md text-center border-current">
              <h2>7/24 Tech Support</h2>
            </div>
            <div className="py-6 shadow-md text-center">
              <h2>40 GB SSD Cloud Storage</h2>
            </div>
            <div className="py-6 shadow-md text-center">
              <button className="bg-green-600 px-10 py-2 text-white rounded-full font-semibold shadow-md">Apply</button>
            </div>
          </div>
        </section>
    </>
}

export default PricingComponent