"use client";

import { useZodForm } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Form } from "react-hook-form";

export const FormNewDeal = () => {
	const form = useZodForm({
		schema: FormNewDealSchema,
		defaultValues: defaultValue,
	});
	const router = useRouter();

	return (
		<Form
			form={form}
			onSubmit={async (values) => {
				const { data, serverError } = defaultValue?.id
				? await 
			}}
		>

		</Form>
	)
};


