import React, { useEffect } from "react";
import Navbar from "../general/Navbar";
import Location from "./Location";
import TodayOverView from "./TodayOverView";

export default function Dashboard() {
  useEffect(() => {
    const handleApi = async () => {
      const res = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=fe4e19ca7e8041a5bbb64448232202&q=London&aqi=yes"
      );
      console.log(res);
    };
    handleApi();
  }, []);

  return (
    <div className="max-w-7xl mx-auto font-Poppins">
      <div className="grid grid-cols-6 md:grid-cols-12">
        <div className="col-span-8 p-8  h-screen">
          <Navbar />
          <hr className="border-2 my-4 border-gray-100" />
          <TodayOverView />
        </div>
        <div className="col-span-12  min-h-max p-8 md:col-span-4 bg-gray-700 h-screen">
          <Location />
        </div>
      </div>
    </div>
  );
}
