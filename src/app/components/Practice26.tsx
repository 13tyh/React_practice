"use client";

import {Button} from "@/components/ui/button";
import {useState} from "react";

export const Practice26 = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `こんにちは、${name}さん。${age}歳ですね。${address}にお住まいですね。`
    );
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      alert("名前は10文字以内で入力してください。");
      return;
    } else if (e.target.value.length === 0) {
      alert("名前は必須です。");
      return;
    }

    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) {
      alert("年齢は3桁以内で入力してください。");
      return;
    } else if (e.target.value.length === 0) {
      alert("年齢は必須です。");
      return;
    }
    setAge(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <div className="mx-auto max-w-2xl mt-8">
      <div className="flex flex-col items-center">
        <h1>ノーマルのフォーム練習</h1>
        <div>
          <form
            onSubmit={handleFormSubmit}
            className="mt-4 border border-gray-400 p-4 rounded-sm min-w-[400px] flex flex-col gap-4 items-center"
          >
            <label htmlFor="name">
              名前:
              <input
                type="text"
                id="name"
                value={name}
                className="ml-2 border border-gray-400 p-1 rounded"
                onChange={handleNameChange}
              />
            </label>
            <label htmlFor="age">
              年齢:
              <input
                type="number"
                id="age"
                value={age}
                className="ml-2 border border-gray-400 p-1 rounded"
                onChange={handleAgeChange}
              />
            </label>
            <label htmlFor="address">
              住所:
              <input
                type="text"
                id="address"
                value={address}
                className="ml-2 border border-gray-400 p-1 rounded"
                onChange={handleAddressChange}
              />
            </label>
            <div className="mt-4 flex justify-center">
              <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                送信
              </Button>
            </div>
          </form>
        </div>
        <div className="mt-8 border border-gray-400 p-4 rounded-sm min-w-[400px]">
          <h2>フォームに入力したデータ</h2>
          <div className="mt-4 flex flex-col gap-2">
            <p>名前: {name}</p>
            <p>年齢: {age}</p>
            <p>住所: {address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice26;
