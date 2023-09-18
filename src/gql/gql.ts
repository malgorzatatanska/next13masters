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
    "query CountCategoryProductsCount($filters: CategoryFiltersInput) {\n  categories(filters: $filters) {\n    data {\n      attributes {\n        products {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.CountCategoryProductsCountDocument,
    "query GetProductById($productId: ID, $pagination: PaginationArg) {\n  product(id: $productId) {\n    data {\n      attributes {\n        ...SingleProductFragment\n      }\n    }\n  }\n}": types.GetProductByIdDocument,
    "query GetProductList($pagination: PaginationArg) {\n  products(pagination: $pagination) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.GetProductListDocument,
    "fragment ProductListItemFragment on ProductEntity {\n  id\n  attributes {\n    name\n    price\n    slug\n    description\n    images {\n      data {\n        attributes {\n          height\n          width\n          url\n        }\n      }\n    }\n    categories {\n      data {\n        attributes {\n          slug\n          name\n        }\n      }\n    }\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsCount {\n  products {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}": types.ProductsCountDocument,
    "query ProductsGetByCategorySlug($filters: CategoryFiltersInput!, $pagination: PaginationArg) {\n  categories(filters: $filters) {\n    data {\n      id\n      attributes {\n        name\n        products(pagination: $pagination) {\n          data {\n            ...ProductListItemFragment\n          }\n        }\n      }\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "fragment SingleProductFragment on Product {\n  categories {\n    data {\n      attributes {\n        name\n        slug\n      }\n    }\n  }\n  name\n  price\n  slug\n  description\n  images {\n    data {\n      attributes {\n        url\n        height\n        width\n      }\n    }\n  }\n  reviews(pagination: $pagination) {\n    data {\n      attributes {\n        name\n        createdAt\n        content\n        rating\n      }\n    }\n  }\n}": types.SingleProductFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListProductItemFragment on CategoryEntity {\n  attributes {\n    name\n    slug\n    description\n    products {\n      data {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryListProductItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CountCategoryProductsCount($filters: CategoryFiltersInput) {\n  categories(filters: $filters) {\n    data {\n      attributes {\n        products {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CountCategoryProductsCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductById($productId: ID, $pagination: PaginationArg) {\n  product(id: $productId) {\n    data {\n      attributes {\n        ...SingleProductFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').GetProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductList($pagination: PaginationArg) {\n  products(pagination: $pagination) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').GetProductListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on ProductEntity {\n  id\n  attributes {\n    name\n    price\n    slug\n    description\n    images {\n      data {\n        attributes {\n          height\n          width\n          url\n        }\n      }\n    }\n    categories {\n      data {\n        attributes {\n          slug\n          name\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsCount {\n  products {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($filters: CategoryFiltersInput!, $pagination: PaginationArg) {\n  categories(filters: $filters) {\n    data {\n      id\n      attributes {\n        name\n        products(pagination: $pagination) {\n          data {\n            ...ProductListItemFragment\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SingleProductFragment on Product {\n  categories {\n    data {\n      attributes {\n        name\n        slug\n      }\n    }\n  }\n  name\n  price\n  slug\n  description\n  images {\n    data {\n      attributes {\n        url\n        height\n        width\n      }\n    }\n  }\n  reviews(pagination: $pagination) {\n    data {\n      attributes {\n        name\n        createdAt\n        content\n        rating\n      }\n    }\n  }\n}"): typeof import('./graphql').SingleProductFragmentFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
