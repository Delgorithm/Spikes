import Navbar from "./components/navbar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex bg-[#DEDEE8]/20 h-screen">
			<Navbar />
			<section className="flex flex-col gap-5 w-full my-5 px-8 bg-white rounded-l-xl border-2 border-black/10">
				{children}
			</section>
		</section>
	);
}
