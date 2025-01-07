"use client";
import {Button} from "@/components/ui/button";
import React from "react";
import {useFeedbackManage} from "@/hooks/useFeedbackManage";

const Practice6 = () => {
  const {
    inputValue,
    feedbackList,
    handleTextChange,
    handleAddFeedback,
    handleRemoveFeedback,
  } = useFeedbackManage();
  return (
    <div className="mx-auto mt-16 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <textarea
            className="mb-6 border border-gray-400 rounded-sm "
            cols={50}
            rows={5}
            placeholder="フィードバックを入力してください"
            value={inputValue}
            onChange={handleTextChange}
            autoFocus
          ></textarea>
          <div className="flex justify-center mb-6 gap-4">
            <Button onClick={handleAddFeedback}>送信する</Button>
            <Button onClick={handleRemoveFeedback}>
              最後に追加したフィードバックを削除する
            </Button>
          </div>
          <div>
            <h3 className="text-3xl text-center">フィードバック一覧</h3>
            <ul className="list-disc list-inside">
              {feedbackList.map((feedback, index) => (
                <li key={index}>{feedback}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice6;
