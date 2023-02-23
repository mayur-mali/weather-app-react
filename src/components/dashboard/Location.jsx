import React from "react";
import moment from "moment";
export default function Location(props) {
  return (
    <div>
      <div className="flex flex-none justify-between items-center">
        <div>
          <h2 className="text-4xl text-white capitalize">
            {props.location?.name}
          </h2>
          <h4 className="text-md text-gray-200 capitalize">
            {props.location?.country}
          </h4>
        </div>
        <div>
          <h2 className="text-xl text-white capitalize">
            {moment(props.location?.localtime).format("LT")}
          </h2>
        </div>
      </div>
      <div className="flex justify-between items-center my-4">
        <div>
          <img
            src={`https:${props.current?.condition.icon}`}
            className="h-20 w-20"
            alt=""
          />
          <h2 className="text-7xl text-white capitalize">
            {props.current?.temp_c}&#176; C
          </h2>
        </div>
        <div>
          <h2 className="text-xl text-white capitalize">
            {props.current?.condition.text}
          </h2>
        </div>
      </div>
      <hr />
    </div>
  );
}
