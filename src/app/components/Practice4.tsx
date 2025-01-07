"use client";

import React from "react";
import {Input} from "../../components/ui/input";
import {useTextChange} from "../../hooks/useTextChange";

const Practice4 = () => {
  const {text, handleTextChange} = useTextChange();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div>
        <div className="flex gap-4 items-center justify-center mb-4 p-10">
          <Input
            type="text"
            placeholder="テキストを入力してください"
            onChange={handleTextChange}
          />
        </div>
        <h3 className="text-center text-2xl">入力値：{text}</h3>
      </div>
    </div>
  );
};

export default Practice4;
