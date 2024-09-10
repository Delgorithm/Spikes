import Navbar from "@/components/component-library/navigation/Navbar";
import Sidebar from "@/components/component-library/navigation/Sidebar";

export default function ComponentLibraryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="bg-[#121212] h-screen flex flex-col">
			<Navbar />
			<section className="flex-grow md:grid md:grid-cols-10 min-h-0 text-[#7E7F81] border-t-[0.25px] border-[#7E7F81]/20 mt-6">
				<div className="watch-sm:hidden md:block col-start-1 col-end-3 min-h-0">
					<Sidebar />
				</div>
				<div className="col-start-3 col-span-full bg-[#1B1B1B] min-h-0 overflow-auto">
					{children}
				</div>
			</section>
		</section>
	);
}
