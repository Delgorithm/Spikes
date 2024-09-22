import BreadcrumEcommerce from "@/components/ecommerce/navigation/breadcrumb-ecommerce";
import BtnGoBack from "@/components/ecommerce/navigation/btn-go-back";
import DescriptionChair from "@/components/ecommerce/product/description-chair";
import ImageProduct from "@/components/ecommerce/product/image-product";
import SelectAmountProduct from "@/components/ecommerce/product/select-amount-product";

export default function MerylLoungeChairPage() {
	return (
		<section className="grid watch-sm:grid-cols-1 watch-sm:grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 watch-sm:gap-10">
			{/* Grid 1 */}
			<section className="watch-sm:p-6 lg:px-24">
				<div className="watch-sm:flex watch-sm:flex-col gap-10 watch-sm:justify-between lg:flex-col">
					<BtnGoBack />
					<BreadcrumEcommerce />
					<DescriptionChair />
				</div>
			</section>

			{/* Grid 2 */}
			<section className="watch-sm:col-start-1 watch-sm:row-start-3 lg:col-start-1 lg:row-start-2 watch-sm:mx-4 lg:mx-0 lg:px-24">
				<SelectAmountProduct />
			</section>

			{/* Grid 3 */}
			<section className="watch-sm:col-start-1 watch-sm:row-start-2 lg:row-span-2 lg:col-start-2 lg:row-start-1 lg:p-16">
				<ImageProduct />
			</section>
		</section>
	);
}
