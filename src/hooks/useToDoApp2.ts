import {useReducer} from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Action =
  | {type: "add"; text: string}
  | {type: "toggle"; id: number}
  | {type: "delete"; id: number};

const initialTodos: Todo[] = [];

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "add":
      return [...state, {id: Date.now(), text: action.text, completed: false}];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unknown action type");
  }
}

type useTodo = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const useTodo = (): useTodo => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const addTodo = (text: string) => {
    if (text.trim()) {
      dispatch({type: "add", text});
    }
  };

  const toggleTodo = (id: number) => {
    dispatch({type: "toggle", id});
  };

  const deleteTodo = (id: number) => {
    dispatch({type: "delete", id});
  };

  return {todos, addTodo, toggleTodo, deleteTodo};
};
