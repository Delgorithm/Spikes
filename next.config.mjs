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
		],
	},
};

export default nextConfig;
