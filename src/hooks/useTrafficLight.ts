import {useEffect, useState} from "react";

const CYCLE_COLORS = {red: "green", yellow: "red", green: "yellow"} as const;

export type useTrafficLightType = {
  lightColor: keyof typeof CYCLE_COLORS;
};

export const useTrafficLight = (): useTrafficLightType => {
  const [lightColor, setLightColor] =
    useState<keyof typeof CYCLE_COLORS>("red");

  useEffect(() => {
    const interval = setTimeout(() => {
      const nextColor = CYCLE_COLORS[lightColor];
      setLightColor(nextColor);
    }, 1000);

    return () => clearTimeout(interval);
  }, [lightColor]);

  return {lightColor};
};
