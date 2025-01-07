"use client";

import {Button} from "../../components/ui/button";
import {useShowSwitch} from "@/hooks/useShowSwitch";

const Practice3 = () => {
  const {isShow, handleShowSwitch} = useShowSwitch();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div>
        <div className="flex gap-4 items-center justify-center mb-4">
          <Button onClick={handleShowSwitch}>表示切り替え</Button>
        </div>
        {isShow && <h3 className="text-center text-6xl">こんにちは</h3>}
      </div>
    </div>
  );
};

export default Practice3;
