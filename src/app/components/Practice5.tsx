"use client";

import React from "react";
import {Button} from "../../components/ui/button";
import {useColorChange} from "../../hooks/useColorChange";

const Practice5 = () => {
  const {COLORS, currentColorIndex, changeColor} = useColorChange();
  return (
    <div
      className="h-screen pt-8"
      style={{backgroundColor: COLORS[currentColorIndex]}}
    >
      <div className="flex justify-center">
        <Button onClick={changeColor}>色を変更</Button>
      </div>
    </div>
  );
};

export default Practice5;
