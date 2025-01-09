"use client";
import React from "react";
import {Button} from "../../components/ui/button";
import {useTimer} from "../../hooks/useTimer";

const Practice12 = () => {
  const {times, isActive, handleTimeToggle, handleTimeReset} = useTimer();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl ">時間：{times}秒</h3>
          <div className="mt-6 flex gap-x-2 justify-center">
            <Button
              className="border-gray-400 bg-gray-500"
              onClick={handleTimeToggle}
            >
              {!isActive ? "開始" : "停止"}
            </Button>
            <Button className="bg-blue-400 " onClick={handleTimeReset}>
              リセット
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice12;
