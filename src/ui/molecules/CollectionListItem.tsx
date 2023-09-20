import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type CollectionListItemProps = {
	product: ProductListItemFragmentFragment;
};

export const CollectionListItem = ({
	product,
}: CollectionListItemProps) => {
	return (
		<div className="p-4 md:w-1/2 xl:w-1/4">
			<div className="rounded-lg bg-gray-100 p-6">
				<img
					className="mb-6 h-40 w-full rounded object-cover object-center"
					src={
						`${process.env.SERVER_URL}${product.attributes?.images?.data[0]?.attributes?.url}` ||
						""
					}
					alt={product.attributes?.name}
				/>

				<h2 className="title-font mb-4 text-lg font-medium text-gray-900">
					{product.attributes?.name}
				</h2>
			</div>
		</div>
	);
};
