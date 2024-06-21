import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { withAuth } from 'next-auth/middleware'

// This function can be marked `async` if using `await` inside
export default withAuth(async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("UserToken")
    const protectPath = ["/Home"]
    const localPath = ["/Login","/SignUp"]
    const isAuthRoute = localPath.some((route)=>path.includes(route))
    const isProtectPath = protectPath.some((route)=>path.includes(route))
    if (!token && isProtectPath) {
        return NextResponse.redirect(new URL('/Login', request.url))
    }
    if (isAuthRoute && token) {
        return NextResponse.redirect(new URL('/', request.url))
    }
},{
    callbacks:{
        async authorized(){
            return true;
        }
    }
})


// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/Home/:path*','/SignUp',"/Login"],
}