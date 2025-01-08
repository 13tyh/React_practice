import {useEffect, useState} from "react";

export type useShowQuotes = string;

const QUOTES = [
  "時は金なり",
  "明日やろうは馬鹿野郎",
  "いつか、必ず、チャンスの順番が来ると信じなさい",
  "何かを捨てないと前に進めない",
  "人生に失敗がないと、人生を失敗する。",
  "行動の起点は、すべて夢にある。",
];

export const useShowQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);
  }, []);
  return currentQuote;
};
