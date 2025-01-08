"use client";

import React from "react";
import {useCurrentTime} from "@/hooks/useCurrentTime";

const Practice9 = () => {
  const currentTime = useCurrentTime();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">時間を表示します。</h3>
          <div className="mt-2 flex gap-x-2 justify-center">
            <h3>{currentTime.toLocaleTimeString()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice9;
