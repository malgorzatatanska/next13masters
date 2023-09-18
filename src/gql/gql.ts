/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CategoryListProductItemFragment on CategoryEntity {\n  attributes {\n    name\n    slug\n    description\n    products {\n      data {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}": types.CategoryListProductItemFragmentFragmentDoc,
    "query GetProductList($pagination: PaginationArg) {\n  products(pagination: $pagination) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.GetProductListDocument,
    "fragment ProductListItemFragment on ProductEntity {\n  id\n  attributes {\n    name\n    price\n    slug\n    description\n    images {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n    categories {\n      data {\n        attributes {\n          slug\n        }\n      }\n    }\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsCount {\n  products {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}": types.ProductsCountDocument,
    "query ProductsGetByCategorySlug($filters: CategoryFiltersInput) {\n  categories(filters: $filters) {\n    data {\n      ...CategoryListProductItemFragment\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListProductItemFragment on CategoryEntity {\n  attributes {\n    name\n    slug\n    description\n    products {\n      data {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryListProductItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductList($pagination: PaginationArg) {\n  products(pagination: $pagination) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').GetProductListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on ProductEntity {\n  id\n  attributes {\n    name\n    price\n    slug\n    description\n    images {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n    categories {\n      data {\n        attributes {\n          slug\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsCount {\n  products {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($filters: CategoryFiltersInput) {\n  categories(filters: $filters) {\n    data {\n      ...CategoryListProductItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
