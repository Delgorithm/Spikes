import BreadcrumEcommerce from "@/components/ecommerce/navigation/breadcrumb-ecommerce";
import BtnGoBack from "@/components/ecommerce/navigation/btn-go-back";
import DescriptionChair from "@/components/ecommerce/product/description-chair";

export default function MerylLoungeChairPage() {
	return (
		<section className="grid grid-cols-2 grid-rows-1">
			<section className="p-16">
				<BtnGoBack />
				<BreadcrumEcommerce />
				<DescriptionChair />
			</section>
			<section className="bg-blue-300">1</section>
		</section>
	);
}
