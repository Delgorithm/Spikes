import { columns, Payment } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { getDealsByStatus } from "@/components/dashboard/table/deal.query";
import { getAuthSession } from "@/lib/auth";

async function getData(): Promise<Payment[]> {
	const session = await getAuthSession();

	const completedDeals = await getDealsByStatus("Completed");

	const dynamicData: Payment[] = completedDeals.map((myDeal) => ({
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
			id: "05",
			date: "Oct. 23",
			object: "Splash Screen Illustrator",
			company: "Adobe LLC.",
			companyimg: "",
			status: "Completed",
			amount: `5.500 $USD`,
		},

		{
			id: "06",
			date: "Sept. 23",
			object: "Brand Guidelines",
			company: "Figma",
			companyimg: "",
			status: "Completed",
			amount: `21.500 $USD`,
		},
	];

	if (!session) {
		return staticData;
	}

	return [...staticData, ...dynamicData];
}

export default async function CompletedDealsPage() {
	const data = await getData();

	return (
		<div className="container">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
