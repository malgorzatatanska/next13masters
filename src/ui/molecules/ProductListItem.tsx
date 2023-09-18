import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import {
	// type CategoryListProductItemFragmentFragment,
	type ProductListItemFragmentFragment,
} from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragmentFragment;
	// | CategoryListProductItemFragmentFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.attributes?.slug}`}>
				<article>
					<ProductCoverImage
						// src={
						// 	product.attributes.images?.data[0]?.attributes?.url ||
						// 	""
						// }
						// alt={product.attributes.name}
						src={
							product.attributes?.images?.data[0]?.attributes?.url ||
							""
						}
						alt={product.attributes?.name || ""}
					/>
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
