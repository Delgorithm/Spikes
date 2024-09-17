import { getAuthSession } from "./auth";
import { createSafeActionClient } from "next-safe-action";

export const action = createSafeActionClient();

export class ServerError extends Error {}

export const authenticatedAction = createSafeActionClient({
	handleServerError: (error) => {
		if (error instanceof ServerError) {
			return {
				serverError: error.message,
			};
		}

		return {
			serverError: "An unexpected error occurred",
		};
	},
}).use(async ({ next }) => {
	const session = await getAuthSession();

	if (!session || !session.user) {
		throw new ServerError("You must be logged in to continue");
	}

	const userId = session.user.id;

	return next({ ctx: { userId } });
});
