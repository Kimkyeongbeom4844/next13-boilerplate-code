"use client";
import React from "react";
import { useGetMyIpQuery } from "@/stores/services/ip";

export default function Page() {
  const { data, error, isLoading, refetch } = useGetMyIpQuery(null);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Oh no, there was an error</h2>
      ) : data ? (
        <h2>현재 IP : {data.ip}</h2>
      ) : null}
      <button onClick={() => refetch()} disabled={isLoading}>
        query Hook 재 호출
      </button>
    </>
  );
}
