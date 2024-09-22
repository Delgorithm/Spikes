import NavbarEcommerce from "@/components/ecommerce/navigation/navbar-ecommerce";

export default function EcommerceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="min-h-screen flex flex-col">
			<NavbarEcommerce />
			<main className="flex-grow h-full lg:overflow-hidden">{children}</main>
		</section>
	);
}
