import React from "react";
import Priceplan from "./Priceplan";

const Services = () => {
  return (
    <div
      id='services'
      className='max-w-[1240px] mx-auto mt-24 md:flex md:flex-col md:items-center md:justify-center p-4 md:h-screen'
    >
      <h1 className='text-center text-5xl font-bold text-primary'>Services</h1>
      <div>
        <Priceplan />
      </div>
    </div>
  );
};

export default Services;
