import { notFound } from "next/navigation";
import { getCollectionBySlug } from "@/api/products";
import { Collection } from "@/ui/organisms/Collection";

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
