import NavbarEcommerce from "@/components/ecommerce/navigation/navbar-ecommerce";

export default function EcommerceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="min-h-screen">
			<NavbarEcommerce />
			<>{children}</>
		</section>
	);
}
