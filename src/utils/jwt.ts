import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret";

export function signJwt(
	payload: Record<string, unknown>,
	expiresIn = "1h"
): string {
	return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyJwt(token: string): Record<string, unknown> {
	try {
		return jwt.verify(token, JWT_SECRET) as Record<string, unknown>;
	} catch (error) {
		throw new Error("Invalid token");
	}
}
