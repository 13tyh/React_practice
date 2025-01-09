"use client";

import React from "react";
import {Input} from "../../components/ui/input";
import {Button} from "@/components/ui/button";
import {useMemoList} from "@/hooks/useMemoList";

const Practice15 = () => {
  const {memo, memoList, handleChangeMemo, handleAddMemo, handleDeleteMemo} =
    useMemoList();
  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {/* 入力フォーム*/}
          <div>
            <Input
              type="text"
              value={memo}
              placeholder="メモを入力してください"
              onChange={handleChangeMemo}
            />
            <div className="flex justify-center">
              <Button className="mt-2 bg-blue-400" onClick={handleAddMemo}>
                追加
              </Button>
            </div>
          </div>

          {/* メモのリスト */}
          <div className="mt-4">
            <ul className="space-y-4">
              {memoList.map((memo, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border rounded-lg border-gray-300 p-4 text-sm"
                >
                  {memo}{" "}
                  <Button
                    className="bg-red-500"
                    onClick={() => handleDeleteMemo(index)}
                  >
                    削除
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice15;
