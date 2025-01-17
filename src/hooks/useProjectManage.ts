import {useState, useReducer} from "react";

export type Task = {
  id: number;
  text: string;
  status: "todo" | "in-progress" | "done";
  deadline?: string;
  assignee?: string;
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
  | {type: "deleteProject"; id: number}
  | {type: "addTask"; projectId: number; text: string}
  | {
      type: "updateTaskStatus";
      projectId: number;
      taskId: number;
      status: Task["status"];
    }
  | {type: "deleteTask"; projectId: number; taskId: number};

const initialState: State = {projects: []};

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
        projects: state.projects.filter((project) => project.id !== action.id),
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
    default:
      throw new Error("Unknown action type");
  }
}

export const useProjectManage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [projectName, setProjectName] = useState("");
  const [taskText, setTaskText] = useState("");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  return {
    dispatch,
    state,
    projectName,
    taskText,
    selectedProject,
    setProjectName,
    setTaskText,
    setSelectedProject,
    handleAddProject,
    handleAddTask,
  };
};
