import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getCollectionBySlug } from "@/api/products";
import { Collection } from "@/ui/organisms/Collection";

export const generateMetadata = async ({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> => {
	const collection = await getCollectionBySlug(params.collectionName);

	if (!collection) {
		throw new Error("Product not found");
	}

	return {
		title: `${collection.name}`,
		description: `${collection.description}`,
		openGraph: {
			title: `${collection.name}`,
			description: `${collection.description}`,
			images: [{ url: `${collection.image?.data?.attributes?.url}` }],
		},
	};
};

export default async function CollectionsPage({
	params,
}: {
	params: { collectionName: string };
}) {
	const collection = await getCollectionBySlug(params.collectionName);

	if (!collection) {
		return notFound();
	}
	return (
		<div className="mx-auto text-gray-500">
			<Collection
				name={collection.name}
				description={collection.description}
				products={collection.products?.data || []}
			/>
		</div>
	);
}
