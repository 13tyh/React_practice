"use client";

import React from "react";
import {useTransCelsius} from "@/hooks/useTransCelsius";

const Practice7 = () => {
  const {celsius, handleCelsiusChange, toFahrenheit} = useTransCelsius();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center mb-6 gap-1">
            <label htmlFor="celsius">摂氏温度(°C)：</label>
            <input
              id="celsius"
              type="number"
              className="border-gray-400 rounded-sm"
              onChange={handleCelsiusChange}
            />
          </div>
          <p>華氏温度(°F)： {toFahrenheit(celsius)}</p>
        </div>
      </div>
    </div>
  );
};

export default Practice7;
