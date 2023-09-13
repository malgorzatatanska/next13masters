import {
	type ProductResponseItemType,
	type ProductItemType,
} from "@/ui/types";

export const getProductById = async (
	id: ProductResponseItemType["id"],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);

	const productResponse =
		(await res.json()) as ProductResponseItemType;

	return productResponseItemToProductItemType(productResponse);
};

export const getProductsList = async ({
	take,
	offset,
}: {
	take?: string;
	offset?: string;
}) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	);

	const productsResponse =
		(await res.json()) as ProductResponseItemType[];

	const products = productsResponse.map(
		(product): ProductItemType => {
			return productResponseItemToProductItemType(product);
		},
	);

	return products;
};

const productResponseItemToProductItemType = (
	productsResponse: ProductResponseItemType,
): ProductItemType => {
	return {
		id: productsResponse.id,
		category: productsResponse.category,
		name: productsResponse.title,
		price: productsResponse.price,
		coverImage: {
			alt: productsResponse.title,
			src: productsResponse.image,
		},
		description: productsResponse.description,
	};
};
