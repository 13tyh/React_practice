// このファイルの先頭に 'use client' を追加
"use client";

import {useStore} from "@/store/useStore"; // Zustand ストアのインポート
import {Button} from "../../components/ui/button";

const SomeComponent = () => {
  const {counters, increase, decrease} = useStore();

  if (!counters) return <div>Loading...</div>; // データが未取得の場合

  return (
    <div className="mx-auto mt-8 max-w-2xl">
      <div className="flex justify-center flex-col items-center gap-4">
        <div>カウント: {counters["counter1"] || 0}</div>
        <div className="flex gap-4">
          <Button className="bg-blue-500" onClick={() => increase("counter1")}>
            +
          </Button>
          <Button className="bg-red-500" onClick={() => decrease("counter1")}>
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SomeComponent;
