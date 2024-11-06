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
	images: {},
};

export default nextConfig;
