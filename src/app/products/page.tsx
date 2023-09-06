import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Nacomi day cream",
		category: "Kremy",
		price: 50,
		coverImage: {
			alt: "krem",
			src: "/krem1.png",
		},
	},
	{
		id: "1",
		name: "Nacomi day cream",
		category: "Kremy",
		price: 50,
		coverImage: {
			alt: "krem",
			src: "/krem1.png",
		},
	},
	{
		id: "1",
		name: "Nacomi day cream",
		category: "Kremy",
		price: 50,
		coverImage: {
			alt: "krem",
			src: "/krem1.png",
		},
	},
	{
		id: "1",
		name: "Nacomi day cream",
		category: "Kremy",
		price: 50,
		coverImage: {
			alt: "krem",
			src: "/krem1.png",
		},
	},
];

export default function Prosucts() {
	return (
		<div className="min-h-screen bg-gray-100">
			<section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<ProductList products={products} />
			</section>
		</div>
	);
}