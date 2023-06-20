import React from "react";

export default function Page({ params }: { params: { type: string } }) {
  return (
    <>
      <h3>[type] 값을 parmas.type으로 동적으로 추출할 수 있다</h3>
      <h1>현재 children : {params.type}</h1>
    </>
  );
}
