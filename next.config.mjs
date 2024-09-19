/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: false,
			},
			{
				source: "/dashboard/deals",
				destination: "/dashboard/deals/alldeals",
				permanent: false,
			},
		];
	},
	images: {
		domains: [
			"cdn.dribbble.com",
			"dribbble.com",
			"avatars.githubusercontent.com",
			"www.google.com",
			"svgrepo.com",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.dribbble.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**.google.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**google.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
