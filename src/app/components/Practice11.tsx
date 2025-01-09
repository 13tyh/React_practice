"use client";

import React from "react";
import {useTrafficLight} from "../../hooks/useTrafficLight";

const Practice11 = () => {
  const {lightColor} = useTrafficLight();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">↓信号機を表示します。</h3>
          <div className="mt-6 flex gap-x-2 justify-center">
            <div
              className={`size-12 rounded-full ${
                lightColor == "green" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`size-12 rounded-full ${
                lightColor == "yellow" ? "bg-yellow-500" : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`size-12 rounded-full ${
                lightColor == "red" ? "bg-red-500" : "bg-gray-500"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice11;
