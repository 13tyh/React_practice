"use client";

import React from "react";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {Textarea} from "../../components/ui/textarea";
import {useDiaryApp} from "../../hooks/useDiaryApp";

const Practice17 = () => {
  const {
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handleFilterDateChange,
    handleAddDiary,
    filteredDiaries,
  } = useDiaryApp();
  return (
    <div className="container">
      <div className="mx-auto mt-8 max-w-2xl">
        <div className="w-96 flex justify-center flex-col mx-auto">
          <h3 className="text-2xl font-bold">日記アプリ</h3>
          {/* 日記追加フォーム */}
          <div className="mt-4 flex flex-col space-y-4">
            <Input
              type="text"
              placeholder="タイトル"
              value={title}
              className="w-full"
              onChange={handleTitleChange}
            />
            <Textarea
              placeholder="内容"
              value={content}
              className="w-full h-32 border border-gray-400"
              onChange={handleContentChange}
            />
            <Button className="bg-blue-500" onClick={handleAddDiary}>
              追加
            </Button>
          </div>
          {/* 日付フィルター */}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-base">日付フィルター</span>
            <Input
              onChange={handleFilterDateChange}
              type="date"
              className="w-60"
            />
          </div>
          {/* 日記一覧 */}
          <div className="mt-7">
            <h3 className="text-2xl font-bold">日記一覧</h3>
            <ul>
              {filteredDiaries.map((diary, index) => (
                <li
                  key={index}
                  className="mt-4 rounded-md border border-gray-400 p-4"
                >
                  <h3 className="font-bold">{diary.title}</h3>
                  <div className="ml-4">
                    <p>{diary.content}</p>
                    <p>{diary.date.toLocaleDateString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice17;
