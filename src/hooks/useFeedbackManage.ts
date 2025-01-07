import {useState} from "react";

type UseFeedbackManage = {
  inputValue: string;
  feedbackList: string[];
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleAddFeedback: () => void;
  handleRemoveFeedback: () => void;
};

export const useFeedbackManage = (): UseFeedbackManage => {
  const [inputValue, setInputValue] = useState("");
  const [feedbackList, setFeedbackList] = useState<string[]>([]);
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  const handleAddFeedback = () => {
    if (!inputValue.trim()) {
      return;
    }
    setFeedbackList((prev) => [...prev, inputValue]);
    setInputValue("");
    document.querySelector("textarea")?.focus();
  };
  const handleRemoveFeedback = () => {
    setFeedbackList((prev) => {
      const feedbackCopy = [...prev];
      feedbackCopy.pop();
      return feedbackCopy;
    });
  };
  return {
    inputValue,
    feedbackList,
    handleTextChange,
    handleAddFeedback,
    handleRemoveFeedback,
  };
};
