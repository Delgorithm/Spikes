import { columns, Payment } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { getDealsByStatus } from "@/components/dashboard/table/deal.query";
import { getAuthSession } from "@/lib/auth";

async function getData(): Promise<Payment[]> {
	const session = await getAuthSession();

	const ongoingDeals = await getDealsByStatus("Ongoing");

	const dynamicData: Payment[] = ongoingDeals.map((myDeal) => ({
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
			id: "03",
			date: "Dec. 23",
			object: "Pitch Deck B2B",
			company: "Amazon",
			companyimg: "",
			status: "Ongoing",
			amount: `14.000 $USD`,
		},
		{
			id: "07",
			date: "Sept. 23",
			object: "New messages UX",
			company: "Slack Inc.",
			companyimg: "",
			status: "Ongoing",
			amount: `1.900 $USD`,
		},
	];

	if (!session) {
		return staticData;
	}

	return [...staticData, ...dynamicData];
}

export default async function OngoingDealsPage() {
	const data = await getData();

	return (
		<div className="container">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
