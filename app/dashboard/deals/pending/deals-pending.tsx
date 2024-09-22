import { columns, Payment } from "@/components/dashboard/table/columns";
import { DataTable } from "@/components/dashboard/table/data-table";
import { getDealsByStatus } from "@/components/dashboard/table/deal.query";
import { getAuthSession } from "@/lib/auth";

async function getData(): Promise<Payment[]> {
	const session = await getAuthSession();

	const pendingDeals = await getDealsByStatus("Ongoing");

	const dynamicData: Payment[] = pendingDeals.map((myDeal) => ({
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
			id: "01",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Stripe Inc",
			companyimg: "",
			status: "Pending",
			amount: `7.800 $USD`,
		},

		{
			id: "728ed52f",
			date: "Oct. 23",
			object: "Features Add",
			company: "The Browser Company",
			companyimg: "",
			status: "Pending",
			amount: `14.500 $USD`,
		},

		{
			id: "08",
			date: "Sept. 23",
			object: "Landing page",
			company: "Opensea",
			companyimg: "",
			status: "Pending",
			amount: `2.300 $USD`,
		},
	];

	if (!session) {
		return staticData;
	}

	return [...staticData, ...dynamicData];
}

export default async function PendingDealsPage() {
	const data = await getData();

	return (
		<div className="container">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
