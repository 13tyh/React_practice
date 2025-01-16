"use client";
import {Button} from "@/components/ui/button";
import React from "react";
import {useCounter} from "@/hooks/useCounter";

const Practice19 = () => {
  const {count, increment, decrement, reset} = useCounter();
  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center flex-col items-center">
        <h1>カウント: {count}</h1>
        <div className="mt-4 flex justify-center flex-col space-y-4">
          <Button className="bg-blue-500" onClick={increment}>
            増加
          </Button>
          <Button className="bg-red-500" onClick={decrement}>
            減少
          </Button>
          <Button className="bg-green-500" onClick={reset}>
            リセット
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Practice19;
