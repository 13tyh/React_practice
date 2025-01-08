import {useState} from "react";

export const useTransCelsius = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(e.target.value));
  };
  const toFahrenheit = (celsius: number) => {
    return celsius * 1.8 + 32;
  };
  return {celsius, handleCelsiusChange, toFahrenheit};
};
