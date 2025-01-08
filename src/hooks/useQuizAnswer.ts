import {useState} from "react";

export const CORRECT_ANSWER = "ライブラリ";
export const QUESTIONS: string = "Reactはどのようなものですか？";
export const CHOICES: string[] = [
  "ライブラリ",
  "フレームワーク",
  "プログラミング言語",
  "データベース",
  "サーバー",
];

type QuizAnswer = {
  selectedAnswer: string;
  handleSelect: (choice: string) => void;
  handleSubmit: () => void;
  result: string;
};

export const useQuizAnswer = (): QuizAnswer => {
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
