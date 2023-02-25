import moment from "moment";
import React, { useState } from "react";
import Search from "../../assets/icons/Search";

export default function Navbar(props) {
  const [searchCity, setSearchCity] = useState(null);
  const handleSearch = () => {
    props.setCity(searchCity);
  };
  function searchDebounce(callBack, delay) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      if (searchCity.length > 3) {
        props.setLoading(true);
        timer = setTimeout(() => {
          props.setLoading(false);
          callBack();
        }, delay);
      }
    };
  }

  const handleCitySearch = searchDebounce(handleSearch, 500);
  console.log();
  return (
    <div className="sm:h-20 gap-6 flex flex-col sm:flex-row justify-between capitalize items-center">
      <div className="flex-none">
        <h2 className="text-3xl font-bold text-slate-700 ">
          {moment(new Date()).format("MMMM YYYY")}
        </h2>
        <h3 className="text-lg font-bold text-gray-400 ">
          {`${moment(new Date()).format("dddd")} , ${moment(new Date()).format(
            "ll"
          )}`}
        </h3>
      </div>
      <div className="border flex items-center  pl-4 rounded-md  bg-gray-50 w-full h-12">
        <form
          onKeyUp={handleCitySearch}
          className="flex justify-between w-full items-center"
        >
          <Search />
          <input
            type="text"
            className="w-full focus:outline-none bg-transparent border-none h-full ml-4"
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
