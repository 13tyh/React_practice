"use client";

import React, {useState} from "react";
import {useTodo} from "../../hooks/useToDoApp2";

const TodoApp = () => {
  const {todos, addTodo, toggleTodo, deleteTodo} = useTodo();
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Todo リスト</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="新しいタスクを入力"
            className="flex-1 p-2 border rounded shadow-sm"
          />
          <button
            onClick={handleAdd}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            追加
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="max-w-5xl flex items-center justify-between p-4 border rounded-lg shadow border-gray-500 "
            >
              <span
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
