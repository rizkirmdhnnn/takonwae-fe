// app/middleware.js
import { NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("takonwae-token")?.value;
  console.log("ini dari middleware" + token);
  // Daftar path yang perlu diproteksi
  const protectedPaths = ["/dashboard"];

  if (protectedPaths.includes(url.pathname)) {
    // Jika token tidak ada, redirect ke halaman login
    if (token === undefined) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // Lanjutkan ke halaman selanjutnya jika tidak ada redirect
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
