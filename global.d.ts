declare module "bcrypt" {
	export function hash(
		data: string | Buffer,
		saltOrRounds: string | number
	): Promise<string>;

	export function compare(
		data: string | Buffer,
		encrypted: string
	): Promise<boolean>;

	export function genSalt(rounds?: number): Promise<string>;
}

declare module "jsonwebtoken" {
	export function sign(
		payload: Record<string, unknown> | string | Buffer,
		secret: string,
		options?: { expiresIn?: string | number }
	): string;

	export function verify(
		token: string,
		secret: string
	): Record<string, unknown>;
}
