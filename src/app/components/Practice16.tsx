"use client";

import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useToDoApp} from "@/hooks/useToDoApp";

const Practice16 = () => {
  const {
    taskLabel,
    taskList,
    handleChangeTask,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
  } = useToDoApp();
  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div className=" flex justify-center flex-col gap-y-4">
          <h3>Todoアプリ</h3>
          <div className="flex space-x-4">
            <Input
              type="text"
              value={taskLabel}
              placeholder="タスクを入力"
              onChange={handleChangeTask}
            />
            <Button className="bg-emerald-400" onClick={handleAddTask}>
              追加
            </Button>
          </div>

          <ul className="mt-4 space-y-4">
            {taskList.map((task, index) => (
              <li
                key={index}
                className={`flex justify-between items-center border rounded-lg border-gray-400 p-4 text-sm ${
                  task.isComplete && "line-through"
                }`}
              >
                {task.label}
                <div className="flex space-x-2">
                  <Button
                    className="bg-blue-500"
                    onClick={() => handleCompleteTask(index)}
                  >
                    完了
                  </Button>
                  <Button
                    className="bg-red-500"
                    onClick={() => handleDeleteTask(index)}
                  >
                    削除
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Practice16;
