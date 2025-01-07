import {useState} from "react";

type UseShowSwitch = {
  isShow: boolean;
  handleShowSwitch: () => void;
};

export const useShowSwitch = (): UseShowSwitch => {
  const [isShow, setIsShow] = useState(true);
  const handleShowSwitch = () => {
    setIsShow(!isShow);
  };

  return {isShow, handleShowSwitch};
};
