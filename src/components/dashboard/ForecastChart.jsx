import moment from "moment";
import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";
export default function ForecastChart(props) {
  const data = [];

  props.forecast?.forecastday.forEach((day) => {
    data.push({
      maxtemp_c: day.day.maxtemp_c,
      mintemp_c: day.day.mintemp_c,
      date: moment(day.date).format("ll"),
    });
  });

  return (
    <div className="w-full h-96 px-1">
      <h2 className="text-xl font-bold text-slate-700 mb-4 tracking-wide">
        5 Days Forecast
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" tick={false} />
          <YAxis />
          <Area
            type="monotone"
            dataKey="maxtemp_c"
            stroke="#8884d8"
            strokeWidth={5}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="mintemp_c"
            stroke="#82ca9d"
            strokeWidth={5}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Legend />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
