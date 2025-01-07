import {useState} from "react";

type UseCount = {
  count: number;
  handleCountUp: () => void;
  handleCountDown: () => void;
};
export const useCount = (): UseCount => {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountDown = () => {
    setCount((prev) => prev - 1);
  };

  return {count, handleCountUp, handleCountDown};
};
