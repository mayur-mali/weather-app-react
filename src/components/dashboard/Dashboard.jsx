import React, { useEffect, useState } from "react";
import Navbar from "../general/Navbar";
import ForecastChartLoader from "../loading_screens/ForecastChartLoader";
import LocationLoder from "../loading_screens/LocationLoder";
import TodayOverViewLoader from "../loading_screens/TodayOverViewLoader";
import ForecastChart from "./ForecastChart";
import Location from "./Location";
import SunriseAndSunset from "./SunriseAndSunset";
import TodayOverView from "./TodayOverView";
import axios from "axios";
import ErrorPage from "../general/ErrorPage";
export default function Dashboard() {
  const [data, setData] = useState([]);

  const [city, setCity] = useState("london");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { current, location, forecast } = data;

  useEffect(() => {
    setLoading(true);
    const handleApi = async () => {
      await axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&days=5&aqi=yes`
        )

        .then((data) => {
          setLoading(false);
          setData(data.data);
        })
        .catch((error) => {
          setLoading(false);
          if (error.response.status === 400) {
            setError(error.response.data.error.message);
          }
        });
    };
    handleApi();
  }, [city]);

  const getLocation = (position) => {
    const { latitude, longitude } = position.coords;
    //console.log(latitude, longitude);
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`
    )
      .then((response) => response.json())
      .then((data) => setCity(data.results[0].components.county));
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getLocation, console.log);
  }, []);

  return (
    <div className="max-w-7xl mx-auto font-Poppins">
      <div className="grid grid-cols-6 gap-y-8 lg:grid-cols-12">
        <div className="col-span-12 lg:col-span-8 p-8  lg:h-screen">
          <Navbar setCity={setCity} setLoading={setLoading} />
          <hr className="border-2 my-4 border-gray-100" />

          {loading ? (
            <TodayOverViewLoader />
          ) : (
            <TodayOverView current={current} forecast={forecast} />
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

        {error && <ErrorPage error={error} />}
      </div>
    </div>
  );
}
