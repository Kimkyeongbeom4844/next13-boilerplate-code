"use client";
import React, { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/stores/features/counter";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/stores/store";

export default function page() {
  const [inputValue, setInputValue] = useState(0);
  const counterReducer = useSelector(
    (state: RootState) => state.counterReducer
  );
  const dispatch: AppDispatch = useDispatch();
  const onChangeInputValue = (e: React.ChangeEvent<any>) => {
    setInputValue(Number(e.target.value));
  };
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{counterReducer.value}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <input type={"number"} value={inputValue} onChange={onChangeInputValue} />
      <button onClick={() => dispatch(incrementByAmount(inputValue))}>
        Increment By Amount
      </button>
    </div>
  );
}
