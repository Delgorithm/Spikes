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
	},
};

export default nextConfig;
