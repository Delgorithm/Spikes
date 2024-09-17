"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	useZodForm,
} from "@/components/ui/form";
import { dealActionCreate, dealActionEdit } from "./deal.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DealFormSchema } from "./deal.schema";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export type DealsFormProps = {
	defaultValue?: DealFormSchema & {
		id: string;
	};
};

export default function DealForm({ defaultValue }: DealsFormProps) {
	const form = useZodForm({
		schema: DealFormSchema,
		defaultValues: defaultValue,
	});
	const router = useRouter();

	return (
		<Form
			form={form}
			className="flex flex-col gap-4"
			onSubmit={async (values) => {
				const { data, serverError } = defaultValue?.id
					? await dealActionEdit({
							dealId: defaultValue.id,
							data: values,
					  })
					: ((await dealActionCreate(values)) as any);

				if (data) {
					toast.success(data.message);
					router.refresh();
					return;
				}

				toast.error("Some error occurred", {
					description: serverError,
				});
				return;
			}}>
			<FormField
				control={form.control}
				name="object"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Object</FormLabel>
						<FormControl>
							<Input placeholder="Mobile App..." {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="company"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Company</FormLabel>
						<FormControl>
							<Input placeholder="Stripe Inc..." {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="amount"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Amount</FormLabel>
						<FormControl>
							<Input placeholder="2.500 $USD..." {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="statue"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Statue</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select status" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value="completed">Completed</SelectItem>
								<SelectItem value="ongoing">Ongoing</SelectItem>
								<SelectItem value="pending">Pending</SelectItem>
								<SelectItem value="waiting-for-confirmation">
									Waiting for Confirmation
								</SelectItem>
								<SelectItem value="cancelled">Cancelled</SelectItem>
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>

			<Button type="submit">Submit</Button>
		</Form>
	);
}
