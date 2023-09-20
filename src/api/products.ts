import { loadEnvConfig } from "@next/env";
import { executeGraphql } from "./graphqlApi";
import {
	CollectionsGetBySlugDocument,
	CountCategoryProductsCountDocument,
	GetProductByIdDocument,
	GetProductListDocument,
	ProductsCountDocument,
	ProductsGetByCategorySlugDocument,
	SearchProductsDocument,
} from "@/gql/graphql";

loadEnvConfig(process.cwd());

export const getProductById = async (productId: string) => {
	const product = await executeGraphql(GetProductByIdDocument, {
		productId,
	});

	return product.product?.data?.attributes;
};

export const getProductByCategorySlug = async (
	categorySlug: string,
	page: string,
) => {
	const categories = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{
			filters: {
				slug: {
					eq: categorySlug,
				},
			},
			pagination: {
				page: Number(page),
				pageSize: 4,
			},
		},
	);

	return categories.categories?.data[0]?.attributes?.products?.data;
};

export const getCollectionBySlug = async (collectionSlug: string) => {
	const collection = await executeGraphql(
		CollectionsGetBySlugDocument,
		{
			filters: {
				slug: {
					eq: collectionSlug,
				},
			},
		},
	);

	return collection.collections?.data[0]?.attributes;
};

export const getProductsCount = async (): Promise<number> => {
	const productCount = await executeGraphql(
		ProductsCountDocument,
		{},
	);

	return productCount.products?.meta.pagination.total || 0;
};

export const getCategoryProductsCount = async (
	slug: string,
): Promise<number> => {
	const productsCount = await executeGraphql(
		CountCategoryProductsCountDocument,
		{
			filters: {
				slug: {
					eq: slug,
				},
			},
		},
	);

	return (
		productsCount.categories?.data[0]?.attributes?.products?.data
			?.length || 0
	);
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

export const getSearchProducts = async (searchValue: string) => {
	const searchResponse = await executeGraphql(
		SearchProductsDocument,
		{
			filters: {
				name: {
					contains: searchValue,
				},
			},
		},
	);

	return searchResponse.products?.data;
};

// const productResponseItemToProductItemType = (
// 	productsResponse: ProductResponseItemType,
// ): ProductItemType => {
// 	return {
// 		id: productsResponse.id,
// 		category: productsResponse.category,
// 		name: productsResponse.title,
// 		price: productsResponse.price,
// 		coverImage: {
// 			alt: productsResponse.title,
// 			src: productsResponse.image,
// 		},
// 		description: productsResponse.description,
// 	};
// };
