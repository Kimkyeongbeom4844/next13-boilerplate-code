import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 참고 : https://nextjs.org/docs/app/building-your-application/routing/middleware
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  const isAuthenticated: Boolean = true;

  if (isAuthenticated === false) {
    console.log("로그인 안된 사용자");
    return NextResponse.redirect(new URL("/", request.url));
  }
}
