export const ProductCoverImage = ({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) => {
	return (
		<div className="aspect-square cursor-pointer overflow-hidden rounded-md border  bg-slate-50 hover:bg-slate-100">
			<img
				src={src}
				width="320"
				height="320"
				alt={alt}
				className="h-full w-full object-cover object-center transition duration-500 hover:scale-110"
			/>
		</div>
	);
};
