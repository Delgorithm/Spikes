import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma) as unknown as Adapter,
	theme: {
		logo: "/images/logo.svg",
	},
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],
	callbacks: {
		session({ session, user }) {
			session.user.id = user.id;
			session.user.image = user.image;
			return session;
		},
	},
};

export default NextAuth(authOptions);
