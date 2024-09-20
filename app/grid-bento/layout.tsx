import NavbarGrid from "@/components/bento/navigation/navbar";

export default function GridBentoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="bg-[#141414] min-h-screen">
			<NavbarGrid />
			<div className="flex justify-center items-center">{children}</div>
		</section>
	);
}
