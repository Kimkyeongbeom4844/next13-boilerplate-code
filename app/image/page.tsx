"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/next.svg";

export default function page() {
  return (
    <>
      <h1>이미지 페이지</h1>
      <p>
        Next13버전부터는 Image컴포넌트를 지원해준다
        <br />
        Image컴포넌트는 레이아웃 꺠짐 현상, Layout shift를 방지해주고 priority
        등의 속성을 통해 우선 순위를 설정 할 수 있다.
        <br />
        또한 onLoad, onError, quality등등 많은 추가 속성을 부여하여
        <br />
        개발자가 이미지에 대해 세부적인 컨트롤을 가능하게 해준다
      </p>
      <h2>내부 import 방식(width, heigth 정의 필수 O)</h2>
      <Image
        src={"/next.svg"}
        alt={"로고2"}
        width={100}
        height={100}
        onLoad={() => console.log("로고2 로딩완료")}
        title={"로고2"}
      />
      <h2>외부 import 방식(width, heigth 정의 필수 X) </h2>
      <Image
        src={Logo}
        alt={"로고1"}
        onLoad={() => console.log("로고1 로딩완료")}
        title={"로고1"}
      />
    </>
  );
}
