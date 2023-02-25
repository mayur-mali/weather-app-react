import React from "react";
import errorImage from "../../assets/jpg/error_page.jpg";
export default function ErrorPage(props) {
  return (
    <div className="absolute flex justify-center items-center w-full top-0 left-0 h-screen">
      <img
        src={errorImage}
        className="object-cover h-full w-full"
        alt="error"
      />
      {/*<a href="http://www.freepik.com">Designed by starline / Freepik</a> */}
      <div className="absolute bg-gray-50 px-8 py-10 rounded-xl mx-3 bg-opacity-70 space-y-4 ">
        <h2 className="text-5xl sm:text-7xl text-gray-700">Error 400</h2>
        <h2 className="text-3xl sm:text-5xl text-black ">{props.error}</h2>
        <a href="/">
          <button className="px-4 mt-4 float-right hover:px-8 transition-all duration-500 py-2 rounded-full bg-red-200 text-black">
            go back
          </button>
        </a>
      </div>
    </div>
  );
}
