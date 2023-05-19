import React from "react";
import { UilPlus } from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className=" py-28 px-12">
        <h1 className=" text-black font-semibold text-4xl mb-4">
          Make your party fun!
        </h1>
        <p>Create your own custom playlist today.</p>

        <button className=" bg-amber-500 border-black border-2 px-4 py-1 rounded-lg mt-8 font-semibold">
          Create playlist
        </button>
      </div>

      <div className=" bg-neutral-500 md:w-2/5 p-4">
        <h2 className=" font-bold text-2xl text-center mb-6">Trending songs</h2>
        <div className="flex flex-col list-none space-y-3">
          <div className="bg-white p-3 rounded-lg flex justify-between">
            <p>Unavailable by Davido</p>
            <UilPlus />
          </div>
          <div className="bg-white p-3 rounded-lg flex justify-between">
            <p>Unavailable by Davido</p>
            <UilPlus />
          </div>
          <div className="bg-white p-3 rounded-lg flex justify-between">
            <p>Unavailable by Davido</p>
            <UilPlus />
          </div>
          <div className="bg-white p-3 rounded-lg flex justify-between">
            <p>Unavailable by Davido</p>
            <UilPlus />
          </div>
          <div className="bg-white p-3 rounded-lg flex justify-between">
            <p>Unavailable by Davido</p>
            <UilPlus />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className=" bg-amber-500 border-black border-2 px-4 py-1 rounded-lg mt-8 font-semibold">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
