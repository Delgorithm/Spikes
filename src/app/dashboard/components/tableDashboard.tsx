import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import ArrowDownLogo from "../components/logos/arrowdownLogo";
import { Checkbox } from "@/components/ui/checkbox";

export default function TableDashboard() {
	return (
		<Table>
			<TableCaption>A list of your deals</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px] flex items-center gap-2">
						<Checkbox /> Add <ArrowDownLogo />
					</TableHead>
					<TableHead>Object</TableHead>
					<TableHead>Company</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>2</TableCell>
					<TableCell>3</TableCell>
					<TableCell>4</TableCell>
					<TableCell>5</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
