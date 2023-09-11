import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Products() {
	const products = await getProductsList();

	return (
		<>
			<div className="relative min-h-screen bg-gray-50">
				<section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<ProductList products={products} />
				</section>
			</div>
		</>
	);
}
