/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: false,
			},
		];
	},
	images: {
		domains: ["cdn.dribbble.com", "dribbble.com"],
	},
};

export default nextConfig;
