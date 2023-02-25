import React from "react";
import { BsWind } from "react-icons/bs";
import { TbLocation } from "react-icons/tb";
export default function TodayOverView(props) {
  const hourlyTemp = [];
  props.forecast?.forecastday[0].hour.forEach((data) => {
    hourlyTemp.push(data.temp_c);
  });

  //console.log(hourlyTemp);

  return (
    <div>
      <h2 className="text-xl font-bold  text-slate-700 tracking-wide">
        Today Overview
      </h2>
      <div className="grid capitalize grid-cols-1 gap-6 my-4 md:grid-cols-4">
        <div className="rounded-md gap-x-4 flex justify-between items-center p-8 h-28 col-span-1 md:col-span-2 bg-black bg-opacity-5 ">
          <BsWind className="text-3xl text-blue-500" />
          <div>
            <h4 className="text-md text-gray-400  tracking-wide">
              wind status
            </h4>
            <h2 className="text-slate-700 font-bold text-4xl mt-2 tracking-wide">
              {props.current?.wind_kph}km/h
            </h2>
          </div>
          <div className="flex justify-center items-center flex-col">
            <TbLocation className="text-3xl  text-slate-300" />
            <h2 className="text-slate-700 font-bold text-4xl   tracking-wide">
              {props.current?.wind_dir}
            </h2>
          </div>
        </div>
        <div className="rounded-md p-8 h-28 col-span-1 md:col-span-2 bg-black bg-opacity-5 ">
          <div>
            <h4 className="text-md text-gray-400 ">humidity</h4>
            <h2 className="text-slate-700 font-bold text-3xl">
              {props.current?.humidity}%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
