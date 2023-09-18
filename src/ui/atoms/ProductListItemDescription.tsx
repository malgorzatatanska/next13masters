import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItemDescription = ({
	product: { attributes },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<span aria-hidden="true"></span>
					{attributes?.name}
				</h3>
				<p className="mt-1 text-sm text-gray-500">Black</p>
				<p className="mt-1 text-sm text-gray-500">
					{attributes?.categories?.data[0]?.attributes?.slug}
				</p>
			</div>
			<div>
				<p className="text-sm font-medium text-gray-900">
					{formatMoney(Number(attributes?.price) / 100)}
				</p>
			</div>
		</div>
	);
};
