import { columns, Payment } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { getDealsByStatus } from "@/components/dashboard/table/deal.query";
import { getAuthSession } from "@/lib/auth";

async function getData(): Promise<Payment[]> {
	const session = await getAuthSession();

	const waitingDeals = await getDealsByStatus("Ongoing");

	const dynamicData: Payment[] = waitingDeals.map((myDeal) => ({
		id: myDeal.id || "N/A",
		date: new Date(myDeal.date).toLocaleDateString("en-US", {
			month: "short",
			year: "2-digit",
		}),
		object: myDeal.object,
		company: myDeal.company,
		companyimg: myDeal.companyimg ?? "",
		status: "Completed",
		amount: `${myDeal.amount} $USD`,
	}));

	const staticData: Payment[] = [
		{
			id: "04",
			date: "Dec. 23",
			object: "Mobile App, UX Audit",
			company: "Steam",
			companyimg: "",
			status: "Waiting for Confirmation",
			amount: `2.000 $USD`,
		},
	];

	if (!session) {
		return staticData;
	}

	return [...staticData, ...dynamicData];
}

export default async function WaitingDealsPage() {
	const data = await getData();

	return (
		<div className="container">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
