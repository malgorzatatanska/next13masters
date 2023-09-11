import {
	type ProductResponseItemType,
	type ProductItemType,
} from "@/ui/types";

export const getProductsList = async () => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products",
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
