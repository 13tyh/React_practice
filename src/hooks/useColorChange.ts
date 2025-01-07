import {useState} from "react";

type UseColorChange = {
  currentColorIndex: number;
  COLORS: string[];
  changeColor: () => void;
};

export const useColorChange = (): UseColorChange => {
  const COLORS = ["lightblue", "lightgreen", "lightpink", "lavender", "wheat"];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
  };
  return {COLORS, currentColorIndex, changeColor};
};
