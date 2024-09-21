import BreadcrumEcommerce from "@/components/ecommerce/navigation/breadcrumb-ecommerce";
import BtnGoBack from "@/components/ecommerce/navigation/btn-go-back";
import DescriptionChair from "@/components/ecommerce/product/description-chair";
import ImageProduct from "@/components/ecommerce/product/image-product";

export default function MerylLoungeChairPage() {
	return (
		<section className="grid grid-cols-2 grid-rows-1">
			<section className="py-16 px-24">
				<BtnGoBack />
				<BreadcrumEcommerce />
				<DescriptionChair />
			</section>
			<section className="p-16">
				<ImageProduct />
			</section>
		</section>
	);
}
