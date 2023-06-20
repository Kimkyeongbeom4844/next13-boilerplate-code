import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>서브 페이지</h1>
      <p>
        middleware.ts라는 미들웨어를 사용해 로그인 여부를 체크
        <br />
        현재는 임의로 미들웨어에서 true값을 지정하여 정상적으로 라우팅 되도록
        설정
        <br />
        소스코드 중 @/middleware.ts 참조
      </p>
      <Link href={"/"} prefetch={false}>
        메인으로 돌아가기
      </Link>
    </>
  );
}
