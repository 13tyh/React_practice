import {useReducer} from "react";

const initialState = {count: 0};

function reducer(state: {count: number}, action: {type: string}) {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    case "reset":
      return {count: 0};
    default:
      throw new Error("不明なアクションタイプです");
  }
}

export const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 状態を操作する関数を返す
  const increment = () => dispatch({type: "increment"});
  const decrement = () => dispatch({type: "decrement"});
  const reset = () => dispatch({type: "reset"});

  return {count: state.count, increment, decrement, reset};
};
