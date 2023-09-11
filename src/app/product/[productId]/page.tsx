import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { SingleProduct } from "@/ui/organisms/SingleProduct";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	const productsIdsList = products.map((product) => ({
		productId: product.id,
	}));
	return productsIdsList.slice(0, 2);
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name}`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.name} - sklep internetowy`,
			description: `${product.description}`,
			images: [product.coverImage.src],
		},
	};
};

export default async function Product({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return (
		<>
			<div>
				<SingleProduct product={product} />
			</div>
			<aside>
				<Suspense>
					<div className="mx-auto max-w-2xl">
						<SuggestedProductsList />
					</div>
				</Suspense>
			</aside>
		</>
	);
}
