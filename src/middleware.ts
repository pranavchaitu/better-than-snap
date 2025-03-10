import { auth } from "@/lib/auth"
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request : NextRequest) {
    const session = await auth()
    if(!session?.user.id) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
    NextResponse.next()
}

export const config = {
    matcher :  ["/((?!api|_next/static|_next/image|favicon.ico|$).*)"],
}
