import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {
  const secret = new TextEncoder().encode(
    "90e75046363c4d6c60f520210d9cf211301cf0af11491efe39cf6f4dc7cb089ecd6df8bd3cfcbcc95f2e6371ed7d2831b70decadb168f45ab4682664687ab5ec"
  );

  const url = request.nextUrl.clone();
  let jwt = request.cookies.get("token");

  if (!jwt) {
    // if (url.pathname.startsWith("/dashboard")) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }
    // if (url.pathname.startsWith("/notice")) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    try {
      const { payload } = await jose.jwtVerify(jwt, secret);
    } catch (error) {}
    if (url.pathname.includes("/dashboard")) {
      if (payload?.role !== "admin" && payload?.role !== "super_admin") {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }
}
