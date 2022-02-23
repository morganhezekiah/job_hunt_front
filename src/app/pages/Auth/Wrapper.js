import React from "react";
import virtual from "../../assets/images/62.svg";

const Wrapper = ({ title, children }) => {
  return (
    <div className="flex flex-col mt-36   md:flex-row md:mx-0 lg:px-12">
      
      <section className="bg-white  basis-1/2">
        <div className="shadow-lg w-72 mx-auto md:mx-12 lg:mx-auto lg:w-96 lg:mx-0 h-80 lg:h-96  lg:mt-12 ">
          <h1
            className="ml-5 font-semibold py-2 lg:py-6"
            style={{ color: "#666AF6" }}
          >
            {title}
          </h1>
          {children}
        </div>
      </section>
      <section className="hidden md:block basis-1/2 ">
        <div className="lg:mt-14 xl:mt-0">
          <img src={virtual} alt="tex" className="" />
        </div>
      </section>
    </div>
  );
};

export default Wrapper;
