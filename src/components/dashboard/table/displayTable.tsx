import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
	return [
		{
			id: "01",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Stripe Inc",
			statue: "Pending",
			amount: `7.800 $USD`,
		},
		{
			id: "02",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Github Corp.",
			statue: "Cancelled",
			amount: `12.800 $USD`,
		},
		{
			id: "03",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Amazon",
			statue: "Ongoing",
			amount: `14.000 $USD`,
		},
		{
			id: "04",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Steam",
			statue: "Waiting for Confirmation",
			amount: `2.000 $USD`,
		},
		{
			id: "",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Adobe LLC.",
			statue: "Completed",
			amount: `5.500 $USD`,
		},
		{
			id: "728ed52f",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "The Browser Company",
			statue: "Pending",
			amount: `14.500 $USD`,
		},
		{
			id: "728ed52f",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Figma",
			statue: "Completed",
			amount: `21.500 $USD`,
		},
		{
			id: "728ed52f",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Slack Inc.",
			statue: "Ongoing",
			amount: `1.900 $USD`,
		},
		{
			id: "728ed52f",
			date: "Jan. 24",
			object: "Product Design: Payment",
			company: "Opensea",
			statue: "Pending",
			amount: `2.300 $USD`,
		},
	];
}

export default async function DisplayTable() {
	const data = await getData();

	return (
		<div className="container">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
