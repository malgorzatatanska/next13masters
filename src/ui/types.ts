export type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
	description: string;
};

export interface ProductResponseItemType {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
}
