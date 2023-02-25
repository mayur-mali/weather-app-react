import React from "react";

export default function TodayOverViewLoader() {
  return (
    <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-4">
      <div className="rounded-md p-8 h-28 col-span-1 md:col-span-2 bg-black bg-opacity-80 animate-pulse"></div>
      <div className="rounded-md p-8 h-28 col-span-1 md:col-span-2 bg-black bg-opacity-80 animate-pulse"></div>
      <div className="rounded-md p-8 h-28 col-span-1 md:col-span-2 bg-black bg-opacity-80 animate-pulse"></div>
      <div className="rounded-md p-8 h-28 col-span-1 md:col-span-2 bg-black bg-opacity-80 animate-pulse"></div>
    </div>
  );
}
