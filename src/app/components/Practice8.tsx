"use client";

import {Button} from "@/components/ui/button";
import React from "react";
import {useQuizAnswer} from "@/hooks/useQuizAnswer";

const QUESTIONS: string = "Reactはどのようなものですか？";
const CHOICES: string[] = [
  "ライブラリ",
  "フレームワーク",
  "プログラミング言語",
  "データベース",
  "サーバー",
];

const Practice8 = () => {
  const {selectedAnswer, handleSelect, handleSubmit, result} = useQuizAnswer();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{QUESTIONS}</h3>
          <div className="mt-2 flex gap-x-2 justify-center">
            {CHOICES.map((choice, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => handleSelect(choice)}
                  variant={
                    selectedAnswer === choice ? "destructive" : "default"
                  }
                >
                  {choice}
                </Button>
              );
            })}
          </div>

          <div className=" mt-4 flex justify-center">
            <Button onClick={handleSubmit}>送信</Button>
          </div>
          <h3 className=" mt-8 text-center text-2xl">結果表示: {result}</h3>
        </div>
      </div>
    </div>
  );
};

export default Practice8;
