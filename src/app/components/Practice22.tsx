"use client";

import React, {useRef, forwardRef, useImperativeHandle} from "react";

// 子コンポーネント
const InputWithFocus = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 外部から操作可能なメソッドを定義
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    clearInput: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="ここに入力"
      className="p-2 border rounded w-full"
    />
  );
});

InputWithFocus.displayName = "InputWithFocus";

// 親コンポーネント
const Practice22 = () => {
  const inputRef = useRef<{focusInput: () => void; clearInput: () => void}>(
    null
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">
        useRef + forwardRef + useImperativeHandle
      </h1>

      {/* 子コンポーネント */}
      <InputWithFocus ref={inputRef} />

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => inputRef.current?.focusInput()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          フォーカスを当てる
        </button>
        <button
          onClick={() => inputRef.current?.clearInput()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          入力をクリア
        </button>
      </div>
    </div>
  );
};

export default Practice22;
