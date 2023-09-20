import { ProductList } from "./ProductList";
import { getProductByCategorySlug } from "@/api/products";

type SuggestedProductsProps = {
	categorySlug: string;
};

export const SuggestedProductsList = async ({
	categorySlug,
}: SuggestedProductsProps) => {
	const products = await getProductByCategorySlug(categorySlug, "1");

	if (!products) return [];

	return <ProductList products={products} />;
};
