import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { SingleProduct } from "@/ui/organisms/SingleProduct";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	const productsIdsList = products.map((product) => ({
// 		productId: product.id,
// 	}));
// 	return productsIdsList.slice(0, 2);
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	if (!product) {
		throw new Error("Product not found");
	}

	return {
		title: `${product.name}`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.name}`,
			description: `${product.description}`,
			images: [
				{ url: `${product.images?.data[0]?.attributes?.url}` },
			],
		},
	};
};

export default async function Product({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		return notFound();
	}

	return (
		<>
			<div>
				<SingleProduct product={product} />
			</div>
			<aside>
				<div className="mx-auto max-w-2xl text-gray-500">
					<Suspense fallback="Loading ...">
						<div className="mx-auto max-w-2xl">
							<p>Suggested products</p>
							<SuggestedProductsList
								categorySlug={
									product.categories?.data[0]?.attributes?.slug || ""
								}
							/>
						</div>
					</Suspense>
				</div>
			</aside>
		</>
	);
}
