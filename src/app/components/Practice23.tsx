"use client";
import React, {useState} from "react";
import {ProjectProvider, useProjectContext} from "../contexts/ProjectContext";

const AppContent = () => {
  const {state, dispatch} = useProjectContext();
  const [projectName, setProjectName] = useState("");
  const [taskText, setTaskText] = useState("");

  const handleAddProject = () => {
    if (projectName.trim()) {
      dispatch({type: "addProject", name: projectName});
      setProjectName("");
    }
  };

  const handleAddTask = (projectId: number) => {
    if (taskText.trim()) {
      dispatch({type: "addTask", projectId, text: taskText});
      setTaskText("");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">プロジェクト管理アプリ</h1>

      {/* プロジェクト追加 */}
      <div className="mb-6">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="新しいプロジェクト名"
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={handleAddProject}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          プロジェクト追加
        </button>
      </div>

      {/* プロジェクト一覧 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {state.projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-white border rounded shadow-md"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <ul className="mt-4">
              {project.tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between bg-gray-50 p-2 mb-2 border rounded"
                >
                  <span>{task.text}</span>
                  <select
                    value={task.status}
                    onChange={(e) =>
                      dispatch({
                        type: "updateTaskStatus",
                        projectId: project.id,
                        taskId: task.id,
                        status: e.target.value as
                          | "todo"
                          | "in-progress"
                          | "done",
                      })
                    }
                    className="p-1 border rounded"
                  >
                    <option value="todo">未着手</option>
                    <option value="in-progress">進行中</option>
                    <option value="done">完了</option>
                  </select>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "deleteTask",
                        projectId: project.id,
                        taskId: task.id,
                      })
                    }
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  >
                    削除
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="タスクを追加"
                className="p-2 border rounded mr-2"
              />
              <button
                onClick={() => handleAddTask(project.id)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                タスク追加
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Practice23 = () => {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
};

export default Practice23;
