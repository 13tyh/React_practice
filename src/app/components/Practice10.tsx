"use client";

import React from "react";
import {useShowQuotes} from "@/hooks/useShowQuotes";

const Practice10 = () => {
  const currentQuote = useShowQuotes();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">↓名言を表示します。</h3>
          <div className="mt-6 text-5xl flex gap-x-2 justify-center">
            <h3>{currentQuote}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice10;
