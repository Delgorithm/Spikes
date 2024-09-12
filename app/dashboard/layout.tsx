import SidebarDashboard from "@/components/dashboard/navigation/sidebar";

export default function ComponentLibraryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="grid grid-cols-[300px_minmax(900px,_1fr)] min-h-screen bg-neutral-100">
			<div className="flex p-6">
				<SidebarDashboard />
			</div>
			<div className="my-6 bg-white rounded-lg border-[0.25px] border-neutral-300">
				{children}
			</div>
		</section>
	);
}
