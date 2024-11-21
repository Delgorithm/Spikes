import NavbarPasteDashboard from "@/components/component-library/dashboard/ui/navbar-paste-dashboard";
import SidebarDashboard from "@/components/component-library/dashboard/ui/sidebar-paste-library-dashboard";
import { cn } from "@/lib/utils";

export default function DashboardIdLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section
			className={cn(
				"min-h-screen relative noise",
				"lg:grid lg:grid-cols-custom-dashboard-paste-columns lg:grid-rows-custom-dashboard-paste-rows"
			)}>
			<div className="col-span-2 row-start-1 bg-[#121212] border-b-[1px] border-[#1D1D1D]">
				<NavbarPasteDashboard />
			</div>

			<div
				className={cn(
					"row-start-2 col-start-1 bg-[#121212] border-r-[1px] border-[#1D1D1D] overflow-hidden",
					"watch-sm:hidden lg:flex"
				)}>
				<SidebarDashboard />
			</div>

			<div
				className={cn(
					"row-start-2 col-start-2 bg-[#1D1D1D] relative noise overflow-y-auto",
					"watch-sm:h-[calc(100vh-80px)] md:h-[calc(100vh-85px)]"
				)}>
				{children}
			</div>
		</section>
	);
}
