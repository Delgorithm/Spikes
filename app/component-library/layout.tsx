import Navbar from "@/components/component-library/navigation/Navbar";
import Sidebar from "@/components/component-library/navigation/Sidebar";

export default function ComponentLibraryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className=" bg-[#121212] h-screen">
			<Navbar />
			<section className="grid grid-cols-10 auto-rows-auto text-[#7E7F81] border-t-[0.25px] mt-6 ">
				<div className="col-start-1 col-end-3">
					<Sidebar />
				</div>
				<div className="col-start-3 col-span-full bg-[#1B1B1B]">{children}</div>
			</section>
		</section>
	);
}
