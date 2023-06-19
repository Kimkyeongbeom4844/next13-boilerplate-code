"use client";
import { decrement, increment } from "@/stores/features/counter";
import { AppDispatch, RootState } from "@/stores/store";
import { useSelector, useDispatch } from "react-redux";

export default function Page() {
  const counterReducer = useSelector(
    (state: RootState) => state.counterReducer
  );
  const dispatch: AppDispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{counterReducer.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
