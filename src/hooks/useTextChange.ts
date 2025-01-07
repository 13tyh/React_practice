import {useState} from "react";

type UseTextChange = {
  text: string;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useTextChange = (): UseTextChange => {
  const [text, setText] = useState("");
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return {text, handleTextChange};
};
