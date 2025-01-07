"use client";

import {Button} from "../../components/ui/button";
import {useCount} from "../../hooks/useCount";

const Practice2 = () => {
  const {count, handleCountUp, handleCountDown} = useCount();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="">
        <h2 className="text-6xl mb-4 text-center">カウント：{count}</h2>
        <div className="flex gap-4 items-center justify-center mb-4">
          <Button onClick={handleCountUp}>+1ボタン</Button>
          <Button onClick={handleCountDown}>-1ボタン</Button>
        </div>
        {count > 0 ? (
          <p className="text-3xl text-center">正の数です。</p>
        ) : (
          <p className="text-3xl text-center">負の数です。</p>
        )}
      </div>
    </div>
  );
};

export default Practice2;
