export default function CollectionsPage({
	params,
}: {
	params: { collectionName: string };
}) {
	return (
		<div className="mx-auto text-gray-500">
			CollectionName {params.collectionName}
		</div>
	);
}
