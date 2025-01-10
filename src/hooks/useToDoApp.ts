import {useState} from "react";

type Task = {
  label: string;
  isComplete: boolean;
};

export const useToDoApp = () => {
  const [taskLabel, setTaskLabel] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);
  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(e.target.value);
  };

  const handleAddTask = () => {
    if (!taskLabel) return;
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      {label: taskLabel, isComplete: false},
    ]);
    setTaskLabel("");
  };
  const handleCompleteTask = (index: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((prevTask, i) =>
        i === index ? {...prevTask, isComplete: !prevTask.isComplete} : prevTask
      )
    );
  };
  const handleDeleteTask = (index: number) => {
    const newTasks = taskList.filter((_, i) => i !== index);
    setTaskList(newTasks);
  };

  return {
    taskLabel,
    taskList,
    handleChangeTask,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
  };
};
