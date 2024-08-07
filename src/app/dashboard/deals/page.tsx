import NavbarDeals from "../components/navbarDeals";
import TableDashboard from "../components/tableDashboard";

export default function Page() {
	return (
		<>
			<h1 className="mt-6 text-4xl font-medium">Deals</h1>
			<NavbarDeals />
			<TableDashboard />
		</>
	);
}
