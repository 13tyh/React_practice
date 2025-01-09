import {useEffect, useState} from "react";

export type useTimerType = {
  times: number;
  setTimes: (time: number) => void;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  handleTimeToggle: () => void;
  handleTimeReset: () => void;
};

export const useTimer = (): useTimerType => {
  const [times, setTimes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    if (isActive) {
      interval = setInterval(() => {
        setTimes((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && times !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, times]);

  const handleTimeToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
  const handleTimeReset = () => {
    setIsActive(false);
    setTimes(0);
  };

  return {
    times,
    setTimes,
    isActive,
    setIsActive,
    handleTimeToggle,
    handleTimeReset,
  };
};
