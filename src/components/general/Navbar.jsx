import React from "react";
import Search from "../../assets/icons/Search";

export default function Navbar() {
  return (
    <div className="h-20 gap-x-6 flex justify-between capitalize items-center">
      <div className="flex-none">
        <h2 className="text-3xl font-bold text-slate-700 ">january 2023</h2>
        <h3 className="text-lg font-bold text-gray-400 ">
          thursday, jan 4, 2023
        </h3>
      </div>
      <div className="border flex justify-between items-center pl-4 rounded-md  bg-gray-50 w-full h-12">
        <Search />
        <input
          type="text"
          className="w-full focus:outline-none bg-transparent border-none h-full ml-4"
        />
      </div>
    </div>
  );
}
