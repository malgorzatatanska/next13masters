import { loadEnvConfig } from "@next/env";
import { executeGraphql } from "./graphqlApi";
import {
	GetProductListDocument,
	ProductsCountDocument,
	ProductsGetByCategorySlugDocument,
} from "@/gql/graphql";
import {
	type ProductResponseItemType,
	type ProductItemType,
} from "@/ui/types";

loadEnvConfig(process.cwd());

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

// export const getProductsList = async ({
// 	take,
// 	offset,
// }: {
// 	take?: string;
// 	offset?: string;
// }) => {
// 	const res = await fetch(
// 		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
// 	);

// 	const productsResponse =
// 		(await res.json()) as ProductResponseItemType[];

// 	const products = productsResponse.map(
// 		(product): ProductItemType => {
// 			return productResponseItemToProductItemType(product);
// 		},
// 	);

// 	return products;
// };

export const getProductByCategorySlug = async (
	categorySlug: string,
) => {
	const categories = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{
			filters: {
				slug: {
					eq: categorySlug,
				},
			},
		},
	);

	return categories.categories?.data[0]?.attributes?.products?.data;
};

export const getProductsCount = async (): Promise<number> => {
	const productCount = await executeGraphql(
		ProductsCountDocument,
		{},
	);

	return productCount.products?.meta.pagination.total || 0;
};

export const getProductsList = async (pageNumber: string) => {
	const graphqlResonse = await executeGraphql(
		GetProductListDocument,
		{
			pagination: {
				page: parseInt(pageNumber),
				pageSize: 4,
			},
		},
	);

	if (!graphqlResonse.products?.data) {
		return [];
	}

	return graphqlResonse.products.data;
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
