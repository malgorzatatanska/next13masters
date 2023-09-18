import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

const navLinks: {
	href: Route<string>;
	label: string;
	exact: boolean;
}[] = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "All", exact: false },
	{
		href: "/categories/accesories/1",
		label: "Accesories",
		exact: false,
	},
	{ href: "/categories/t-shirts/1", label: "T-shirts", exact: false },
];

export async function Nav() {
	return navLinks.map((link, index) => (
		<li key={index}>
			<ActiveLink
				href={link.href}
				className="text-gray-500 transition hover:text-gray-500/75"
				activeClassName="border-b-2 border-b-pink-500"
				exact
			>
				{link.label}
			</ActiveLink>
		</li>
	));
}
