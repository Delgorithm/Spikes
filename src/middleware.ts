import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/utils/jwt";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value;

	if (!token) {
		return NextResponse.redirect(
			new URL("/component-library/auth/connexion", req.url)
		);
	}

	try {
		verifyJwt(token);
	} catch (error) {
		return NextResponse.redirect(
			new URL("/component-library/auth/connexion", req.url)
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/component-library/dashboard/:path*"],
};
