import {useState} from "react";

const CORRECT_ANSWER = "ライブラリ";

export const useQuizAnswer = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const handleSelect = (choice: string) => {
    setSelectedAnswer(choice);
  };
  const handleSubmit = () => {
    if (selectedAnswer === CORRECT_ANSWER) {
      setResult("正解です!");
    } else {
      setResult("不正解です...");
    }
  };
  return {selectedAnswer, handleSelect, handleSubmit, result};
};
