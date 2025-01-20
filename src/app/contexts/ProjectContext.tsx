// src/context/ProjectContext.tsx
import React, {createContext, useReducer, useContext, ReactNode} from "react";

export type Task = {
  id: number;
  text: string;
  status: "todo" | "in-progress" | "done";
};

export type Project = {
  id: number;
  name: string;
  tasks: Task[];
};

export type State = {
  projects: Project[];
};

export type Action =
  | {type: "addProject"; name: string}
  | {type: "deleteProject"; projectId: number}
  | {type: "addTask"; projectId: number; text: string}
  | {type: "deleteTask"; projectId: number; taskId: number}
  | {
      type: "updateTaskStatus";
      projectId: number;
      taskId: number;
      status: Task["status"];
    };

const initialState: State = {
  projects: [],
};

const ProjectContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "addProject":
      return {
        ...state,
        projects: [
          ...state.projects,
          {id: Date.now(), name: action.name, tasks: []},
        ],
      };
    case "deleteProject":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.projectId
        ),
      };
    case "addTask":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.projectId
            ? {
                ...project,
                tasks: [
                  ...project.tasks,
                  {id: Date.now(), text: action.text, status: "todo"},
                ],
              }
            : project
        ),
      };
    case "deleteTask":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.projectId
            ? {
                ...project,
                tasks: project.tasks.filter(
                  (task) => task.id !== action.taskId
                ),
              }
            : project
        ),
      };
    case "updateTaskStatus":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.projectId
            ? {
                ...project,
                tasks: project.tasks.map((task) =>
                  task.id === action.taskId
                    ? {...task, status: action.status}
                    : task
                ),
              }
            : project
        ),
      };
    default:
      throw new Error("Unknown action type");
  }
}

export const ProjectProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProjectContext.Provider value={{state, dispatch}}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};
