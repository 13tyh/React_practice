"use client";

import React from "react";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {useUserSearch} from "../../hooks/useUserSearch";

const Practice18 = () => {
  const {
    userName,
    userAge,
    query,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeQuery,
    handleAddUser,
    filteredUsers,
  } = useUserSearch();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div className="w-80">
          <h2 className="text-2xl font-bold">ユーザー検索アプリ</h2>

          {/* ユーザー検索フォーム */}
          <div className="mt-8">
            <h3 className="text-base">ユーザー追加フォーム</h3>
            <Input
              type="text"
              placeholder="名前"
              className="mt-4"
              value={userName}
              onChange={handleChangeUserName}
            />
            <Input
              type="text"
              placeholder="年齢"
              className="mt-2"
              value={userAge}
              onChange={handleChangeUserAge}
            />
            <div className="mt-4 flex justify-end">
              <Button className="bg-blue-500" onClick={handleAddUser}>
                追加
              </Button>
            </div>
          </div>

          {/* ユーザー検索フィルター */}
          <div className="mt-8 pt-8 border-t border-t-zinc-600">
            <h3 className="text-base">検索フィルター</h3>
            <Input
              type="text"
              placeholder="ユーザー検索"
              className="mt-4"
              value={query}
              onChange={handleChangeQuery}
            />
          </div>

          {/* ユーザー一覧 */}
          <ul className="mt-8 pt-8 border-t border-t-zinc-600">
            <h3 className="text-base">ユーザー一覧</h3>
            {filteredUsers.map((user, index) => (
              <li
                className="flex justify-between border-b p-4 text-sm"
                key={index}
              >
                <span>{user.name}</span>
                <span>{user.age}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Practice18;
