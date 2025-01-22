"use client";

import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {useSelector, useDispatch} from "react-redux";
import {RootState, store, persistor} from "../../store/store";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../../store/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-4 text-center">
        <h1 className="text-2xl mb-4">Counter: {count}</h1>
        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </button>
        </div>
      </div>
    </div>
  );
};

const Practice25: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Counter />
    </PersistGate>
  </Provider>
);

export default Practice25;
