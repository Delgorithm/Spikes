import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { getDeals } from "./deal.query";

async function getData(): Promise<Payment[]> {
	const myDeals = await getDeals();

	const dynamicData: Payment[] = myDeals.map((myDeal) => ({
		id: myDeal.id || "N/A",
		date: new Date(myDeal.date).toLocaleDateString("en-US", {
			month: "short",
			year: "2-digit",
		}),
		object: myDeal.object,
		company: myDeal.company,
		status: myDeal.statue.charAt(0).toUpperCase() + myDeal.statue.slice(1),
		amount: `${myDeal.amount} $USD`,
	}));

	const staticData: Payment[] = [
		{
			id: "01",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Stripe Inc",
			status: "Pending",
			amount: `7.800 $USD`,
		},
		{
			id: "02",
			date: "Jan. 24",
			object: "App Redesign: Onboarding",
			company: "Github Corp.",
			status: "Cancelled",
			amount: `12.800 $USD`,
		},
		{
			id: "03",
			date: "Dec. 23",
			object: "Pitch Deck B2B",
			company: "Amazon",
			status: "Ongoing",
			amount: `14.000 $USD`,
		},
		{
			id: "04",
			date: "Dec. 23",
			object: "Mobile App, UX Audit",
			company: "Steam",
			status: "Waiting for Confirmation",
			amount: `2.000 $USD`,
		},
		{
			id: "",
			date: "Oct. 23",
			object: "Splash Screen Illustrator",
			company: "Adobe LLC.",
			status: "Completed",
			amount: `5.500 $USD`,
		},
		{
			id: "728ed52f",
			date: "Oct. 23",
			object: "Features Add",
			company: "The Browser Company",
			status: "Pending",
			amount: `14.500 $USD`,
		},
		{
			id: "728ed52f",
			date: "Sept. 23",
			object: "Brand Guidelines",
			company: "Figma",
			status: "Completed",
			amount: `21.500 $USD`,
		},
		{
			id: "728ed52f",
			date: "Sept. 23",
			object: "New messages UX",
			company: "Slack Inc.",
			status: "Ongoing",
			amount: `1.900 $USD`,
		},
		{
			id: "728ed52f",
			date: "Sept. 23",
			object: "Landing page",
			company: "Opensea",
			status: "Pending",
			amount: `2.300 $USD`,
		},
	];

	return [...staticData, ...dynamicData];
}

export default async function DisplayTable() {
	const data = await getData();

	return (
		<div className="container">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
