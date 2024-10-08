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
			{
				source: "/grid-bento",
				destination: "/grid-bento/home",
				permanent: false,
			},
			{
				source: "/ecommerce",
				destination: "/ecommerce/shop/chair/meryl-lounge-chair",
				permanent: false,
			},
			{
				source: "/ecommerce/shop",
				destination: "/ecommerce/shop/chair/meryl-lounge-chair",
				permanent: false,
			},
			{
				source: "/ecommerce/shop/chair",
				destination: "/ecommerce/shop/chair/meryl-lounge-chair",
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
			"cdn.psdrepo.com",
			"onepagelove.imgix.net",
			"cdn.prod.website-files.com",
			"saaslandingpage.com",
			"items.templately.com",
			"i.pinimg.com",
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
			{
				protocol: "https",
				hostname: "cdn.psdrepo.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "onepagelove.imgix.net",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.prod.website-files.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "saaslandingpage.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "items.templately.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.pinimg.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
