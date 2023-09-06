import { type ProductItemType } from "../types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: ProductItemType[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul className="md:gri-cols-3 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
			{products.map((product) => (
				<ProductListItem product={product} key={product.id} />
			))}
		</ul>
	);
};
