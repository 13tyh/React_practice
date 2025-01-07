import {useState} from "react";

export const useShowSwitch = () => {
  const [isShow, setIsShow] = useState(true);
  const handleShowSwitch = () => {
    setIsShow(!isShow);
  };

  return {isShow, handleShowSwitch};
};
