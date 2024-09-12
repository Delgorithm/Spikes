import NavbarAllDeals from "@/components/dashboard/navigation/navbarAllDeals";

export default function AllDealsPage({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="p-8 flex flex-col gap-5">
			<h1 className="text-4xl">Deals</h1>
			<NavbarAllDeals />
			<>{children}</>
		</section>
	);
}
