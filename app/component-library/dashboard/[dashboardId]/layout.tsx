import NavbarPasteDashboard from "@/components/component-library/dashboard/ui/navbar-paste-dashboard";
import SidebarDashboard from "@/components/component-library/dashboard/ui/sidebar-paste-library-dashboard";

export default function DashboardIdLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="min-h-full grid grid-cols-custom-dashboard-paste-columns grid-rows-custom-dashboard-paste-rows">
			<div className="col-span-2 row-start-1 bg-[#121212] border-b-[1px] border-[#1D1D1D]">
				<NavbarPasteDashboard />
			</div>

			<div className="row-start-2 col-start-1 bg-[#121212] border-r-[1px] border-[#1D1D1D]">
				<SidebarDashboard />
			</div>

			<div className="row-start-2 col-start-2 bg-[#1D1D1D]">{children}</div>
		</section>
	);
}
