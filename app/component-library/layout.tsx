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
			<section className="grid auto-cols-auto auto-rows-auto text-[#7E7F81] border-t-[0.25px] mt-6 ">
				<div className="col-span-1 col-start-1 h-full">
					<Sidebar />
				</div>
				<div className="col-span-10 col-start-2 bg-[#1B1B1B] p-6">
					{children}
				</div>
			</section>
		</section>
	);
}
