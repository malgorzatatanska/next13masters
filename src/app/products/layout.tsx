import { Pagination } from "@/ui/organisms/Pagination";

export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			{children}
			<div className="mx-auto  max-w-2xl flex-col pb-20">
				<Pagination />
			</div>
		</div>
	);
}
