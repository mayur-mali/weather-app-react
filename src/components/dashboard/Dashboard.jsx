import React, { useEffect, useState } from "react";
import Navbar from "../general/Navbar";
import ForecastChartLoader from "../loading_screens/ForecastChartLoader";
import LocationLoder from "../loading_screens/LocationLoder";
import TodayOverViewLoader from "../loading_screens/TodayOverViewLoader";
import ForecastChart from "./ForecastChart";
import Location from "./Location";
import SunriseAndSunset from "./SunriseAndSunset";
import TodayOverView from "./TodayOverView";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("shirpur");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { current, location, forecast } = data;

  useEffect(() => {
    setLoading(true);
    const handleApi = async () => {
      await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=fe4e19ca7e8041a5bbb64448232202&q=${city}&days=5&aqi=yes`
      )
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setData(json);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.massage);
        });
    };
    handleApi();
  }, [city]);

  return (
    <div className="max-w-7xl mx-auto font-Poppins">
      <div className="grid grid-cols-6 gap-y-8 lg:grid-cols-12">
        {!error ? (
          <>
            <div className="col-span-12 lg:col-span-8 p-8  lg:h-screen">
              <Navbar setCity={setCity} setLoading={setLoading} />
              <hr className="border-2 my-4 border-gray-100" />

              {loading ? (
                <TodayOverViewLoader />
              ) : (
                <TodayOverView current={current} />
              )}
              {loading ? (
                <ForecastChartLoader />
              ) : (
                <ForecastChart forecast={forecast} />
              )}
            </div>

            {loading ? (
              <LocationLoder />
            ) : (
              <div className="col-span-12 space-y-4 min-h-max p-8 lg:col-span-4 bg-gradient-to-r from-gray-700 to-slate-500 h-screen">
                <Location
                  location={location}
                  current={current}
                  forecast={forecast}
                />
                <SunriseAndSunset forecast={forecast} />
              </div>
            )}
          </>
        ) : (
          "no such city present"
        )}
      </div>
    </div>
  );
}
