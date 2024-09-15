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
		domains: ["cdn.dribbble.com", "dribbble.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.dribbble.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
