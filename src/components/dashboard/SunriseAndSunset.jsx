import moment from "moment";
import React from "react";
import Sunrise from "../../assets/png/sunrise.png";
import Sunset from "../../assets/png/sunset.png";
export default function SunriseAndSunset(props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4 tracking-wide">
        Sunrise & Sunset
      </h2>
      <div className="space-y-4">
        <div className=" rounded-md bg-gradient-to-r flex justify-between items-center from-gray-700 to-slate-500 border-2 border-gray-400 p-4  w-full">
          <img className="w-12 h-12" src={Sunrise} alt="sunrise" />
          <div>
            <h4 className="text-md text-gray-400 capitalize tracking-wide">
              sunrise
            </h4>
            <h2 className="text-white font-bold text-3xl mt-2 tracking-wide">
              {props.forecast?.forecastday[0].astro.sunrise}
            </h2>
          </div>
          <div>
            <h4 className="text-sm text-gray-400 capitalize tracking-wide">
              {moment(props.forecast?.forecastday[0].day)
                .startOf("day")
                .fromNow()}
            </h4>
          </div>
        </div>
        <div className=" rounded-md bg-gradient-to-r flex justify-between items-center from-gray-700 to-slate-500 border-2 border-gray-400 p-4  w-full">
          <img className="w-12 h-12" src={Sunset} alt="sunrise" />
          <div>
            <h4 className="text-md text-gray-400 capitalize tracking-wide">
              sunset
            </h4>
            <h2 className="text-white font-bold text-3xl mt-2 tracking-wide">
              {props.forecast?.forecastday[0].astro.sunset}
            </h2>
          </div>
          <div>
            <h4 className="text-sm text-gray-400 capitalize tracking-wide">
              {moment(props.forecast?.forecastday[0].day)
                .endOf("day")
                .fromNow()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
