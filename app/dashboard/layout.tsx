import SidebarDashboard from "@/components/dashboard/navigation/sidebar";

export default function ComponentLibraryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="grid grid-cols-2 min-h-screen">
			<SidebarDashboard />
			<div>{children}</div>
		</section>
	);
}
