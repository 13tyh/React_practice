"use client";
import {Task, useProjectManage} from "@/hooks/useProjectManage";
import {Button} from "@/components/ui/button";

const ProjectManagerApp = () => {
  const {
    state,
    dispatch,
    projectName,
    taskText,
    setProjectName,
    setTaskText,
    handleAddProject,
    handleAddTask,
  } = useProjectManage();

  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            プロジェクト管理アプリ
          </h1>

          {/* プロジェクト追加 */}
          <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="新しいプロジェクト名"
              className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
            <Button
              onClick={handleAddProject}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              プロジェクト追加
            </Button>
          </div>

          {/* プロジェクト一覧 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {state.projects.map((project) => (
              <div
                key={project.id}
                className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold text-gray-700">
                  ・{project.name}
                </h2>
                <ul className="grid grid-cols-1 gap-3 mt-4">
                  {project.tasks.map((task) => (
                    <li
                      key={task.id}
                      className="flex items-center justify-between bg-white p-3 border border-gray-200 rounded-lg shadow-sm"
                    >
                      <span className="text-gray-700">{task.text}</span>
                      <select
                        value={task.status}
                        onChange={(e) =>
                          dispatch({
                            type: "updateTaskStatus",
                            projectId: project.id,
                            taskId: task.id,
                            status: e.target.value as Task["status"],
                          })
                        }
                        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                        className="ml-3 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        削除
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="タスクを追加"
                    className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button
                    onClick={() => {
                      handleAddTask(project.id);
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                  >
                    タスク追加
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagerApp;
