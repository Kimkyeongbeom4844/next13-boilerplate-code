"use client";
import React from "react";
import { Provider as Providers } from "react-redux";
import { store } from "./store";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <Providers store={store}>{children}</Providers>;
}
