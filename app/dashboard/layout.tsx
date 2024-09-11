import SidebarDashboard from "@/components/dashboard/navigation/sidebar";

export default function ComponentLibraryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="grid grid-cols-[300px_minmax(900px,_1fr)] min-h-screen">
			{/* <div className="max-w-72 p-6 bg-red-500"> */}
			<div className="flex p-6 bg-neutral-100">
				<SidebarDashboard />
			</div>
			<div className="">{children}</div>
		</section>
	);
}
