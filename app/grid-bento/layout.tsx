import NavbarGrid from "@/components/bento/navigation/navbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function GridBentoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="bg-[#141414] min-h-screen">
			<NavbarGrid />
			<Suspense fallback={<Loading />}>
				<div className="flex justify-center items-center">{children}</div>
			</Suspense>
		</section>
	);
}
