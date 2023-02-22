import React from "react";

export default function Location() {
  return (
    <div>
      <div className="flex flex-none justify-between items-center">
        <div>
          <h2 className="text-4xl text-white capitalize">London</h2>
          <h4 className="text-md text-gray-200 capitalize">United Kingdom</h4>
        </div>
        <div>
          <h2 className="text-xl text-white capitalize">8:34 AM</h2>
        </div>
      </div>
      <div className="flex justify-between items-center my-4">
        <div>
          <img
            src="https://cdn.weatherapi.com/weather/64x64/day/302.png"
            className="h-20 w-20"
            alt=""
          />
          <h2 className="text-7xl text-white capitalize">7.0&#176; C</h2>
        </div>
        <div>
          <h2 className="text-xl text-white capitalize">Moderate rain</h2>
        </div>
      </div>
      <hr />
    </div>
  );
}
